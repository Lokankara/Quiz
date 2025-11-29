package com.quiz.card.service;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuizResultDto;
import com.quiz.card.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService implements IQuestionService {

    private final QuestionRepository repository;
    private final Warehouse warehouse;
    private volatile List<FlashCardDto> allCardsCache;
    private final Map<Long, Boolean> answerMap = new HashMap<>();

    @Override
    public List<FlashCardDto> getAllCards() {
        if (allCardsCache == null) {
            synchronized (this) {
                if (allCardsCache == null) {
                    allCardsCache = repository.findAll().stream()
                            .map(FlashCardMapper::toDto)
                            .collect(Collectors.toList());
                    warehouse.seed(allCardsCache);
                }
            }
        }
        return allCardsCache;
    }

    @Override
    public FlashCardDto getRandomCardWithoutRepetition() {
        getAllCards();
        return warehouse.takeFirst().orElse(new FlashCardDto());
    }

    @Override
    public QuizResultDto getResult() {
        Set<Long> answeredIds = answerMap.keySet();
        int total = answeredIds.size();
        long correct = answerMap.values().stream().filter(Boolean::booleanValue).count();
        long incorrect = total - correct;
        return QuizResultDto.builder()
                .total(total)
                .correct(correct)
                .incorrect(incorrect)
                .answeredIds(new HashSet<>(answeredIds))
                .build();
    }

    @Override
    public AnswerDto registerAnswer(Long id, boolean correct) {
        answerMap.put(id, correct);
        warehouse.removeById(id);
        return AnswerDto.builder().id(id).correct(correct).build();
    }

    @Override
    public List<FlashCardDto> getAvailableCards() {
        getAllCards();
        return warehouse.snapshotAvailable();
    }

    public SseEmitter subscribeAvailable() {
        getAllCards();
        return warehouse.subscribe();
    }

    @Override
    public FlashCardDto removeCard(Long id) {
        return repository.findById(id)
                .map(entity -> {
                    repository.deleteById(id);
                    allCardsCache = null;
                    getAllCards();
                    warehouse.removeById(id);
                    answerMap.remove(id);
                    return FlashCardMapper.toDto(entity);
                })
                .orElse(new FlashCardDto());
    }
}
