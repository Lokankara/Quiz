package com.quiz.card.service;

import static com.quiz.card.service.FlashCardMapper.toDto;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.Option;
import com.quiz.card.model.QuestionEntity;
import com.quiz.card.model.ResultDto;
import com.quiz.card.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import lombok.RequiredArgsConstructor;

import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService implements IQuestionService {

    private final Warehouse warehouse;
    private final QuestionRepository repository;
    private final TextFileParserService parserService;
    private volatile List<FlashCardDto> allCardsCache;
    private final Set<AnswerDto> answerMap = Collections.synchronizedSet(new LinkedHashSet<>());

    @Override
    public List<FlashCardDto> getAllCards() {
        if (allCardsCache == null) {
            allCardsCache = repository.findAll().stream()
                    .map(FlashCardMapper::toDto)
                    .collect(Collectors.toList());
            if(allCardsCache == null || allCardsCache.isEmpty()){
                List<QuestionEntity> entities = parserService.parseDataFile(String.valueOf(0));
                repository.saveAll(entities);
                allCardsCache = entities.stream()
                        .map(FlashCardMapper::toDto)
                        .collect(Collectors.toList());
            }
            warehouse.seed(allCardsCache);
        }
        return allCardsCache;
    }

    @Override
    public FlashCardDto getRandomCardWithoutRepetition() {
        getAllCards();
        return warehouse.takeFirst().orElse(new FlashCardDto());
    }

    @Override
    public ResultDto getResult() {
        int total = answerMap.size();
        long correct = answerMap.stream().filter(AnswerDto::isCorrect).count();
        long incorrect = total - correct;
        Set<Long> answeredIds = answerMap.stream()
                .map(AnswerDto::getId)
                .collect(Collectors.toSet());
        return ResultDto.builder()
                .total(total)
                .correct(correct)
                .incorrect(incorrect)
                .answeredIds(answeredIds)
                .build();
    }

    @Override
    public AnswerDto registerAnswer(Long id, List<String> selectedOptions) {
        Optional<QuestionEntity> optional = repository.findById(id);

        if (optional.isEmpty()) {
            return AnswerDto.builder()
                    .correct(false)
                    .explanation("")
                    .build();
        }

        QuestionEntity entity = optional.get();

        Set<String> correctOptions = entity.getOptions().stream()
                .filter(Option::isCorrect)
                .map(Option::getText)
                .collect(Collectors.toSet());

        Set<String> selectedSet = selectedOptions.stream()
                .map(s -> s.replace("\"", ""))
                .collect(Collectors.toSet());

        boolean correct = correctOptions.equals(selectedSet);

        AnswerDto answerDto = AnswerDto.builder()
                .id(entity.getId())
                .correct(correct)
                .explanation(entity.getExplanation())
                .build();

        answerMap.removeIf(a -> a.getId() == id);
        answerMap.add(answerDto);
        warehouse.removeById(id);

        return answerDto;
    }

    private Optional<QuestionEntity> getEntityOptional(Long id) {
        return repository.findById(id);
    }

    @Override
    public Set<AnswerDto> getAnswers() {
        return answerMap;
    }

    @Override
    public List<FlashCardDto> getAvailableCards() {
        getAllCards();
        return warehouse.snapshotAvailable();
    }

    @Override
    public SseEmitter subscribeAvailable() {
        getAllCards();
        return warehouse.subscribe();
    }

    @Override
    public void deleteAll() {
        allCardsCache = null;
        warehouse.clear();
        repository.deleteAll();
    }

    @Override
    public void saveAll(String filenameIndex) {
        List<QuestionEntity> cards = parserService.parseDataFile(filenameIndex);
        repository.saveAll(cards);
    }

    @Override
    public FlashCardDto removeCard(Long id) {
        return getEntityOptional(id)
                .map(entity -> {
                    repository.deleteById(id);
                    allCardsCache = null;
                    getAllCards();
                    warehouse.removeById(id);
                    answerMap.removeIf(a -> a.getId() == id);
                    return toDto(entity);
                })
                .orElse(new FlashCardDto());
    }
}
