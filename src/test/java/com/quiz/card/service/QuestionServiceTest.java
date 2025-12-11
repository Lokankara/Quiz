package com.quiz.card.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.Answers;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuestionEntity;
import com.quiz.card.repository.QuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@ExtendWith(MockitoExtension.class)
class QuestionServiceTest {

    @Mock
    private Warehouse warehouse;

    @Mock
    private QuestionRepository repository;

    @Mock
    private TextFileParserService parserService;

    private QuestionService service;

    @BeforeEach
    void setUp() {
        service = new QuestionService(warehouse, repository, parserService);
    }

    @Test
    void singleAnswerShortLabelMatchesLongText() {
        Answers ans = Answers.builder()
                .text("Cost Explorer. It tracks incurred costs and provides projections")
                .correct(true)
                .build();

        QuestionEntity entity = QuestionEntity.builder()
                .id(1L)
                .question("Which service tracks costs?")
                .answers(Set.of(ans))
                .build();

        AnswerDto dto = service.getAnswerDto(List.of("Cost Explorer"), entity);
        System.err.println(dto.getOptions());
        System.err.println(entity.getAnswers());
        assertTrue(dto.isCorrect());
    }

    @Test
    void multiAnswerExactMatchUnordered() {
        Answers a1 = Answers.builder()
                .text("Cost Explorer. It tracks incurred costs and provides projections")
                .correct(true)
                .build();
        Answers a2 = Answers.builder()
                .text("Cost and Usage Reports (CUR). Provides detailed billing reports")
                .correct(true)
                .build();

        QuestionEntity entity = QuestionEntity.builder()
                .id(2L)
                .question("Which two provide billing info?")
                .answers(Set.of(a1, a2))
                .build();

        AnswerDto dto = service.getAnswerDto(List.of("Cost and Usage Reports", "Cost Explorer"), entity);
        assertTrue(dto.isCorrect());
    }

    @Test
    void testGetAllCardsCacheMissEmptyRepo() {
        QuestionEntity entity1 = new QuestionEntity();
        entity1.setId(1L);
        entity1.setQuestion("Test Question 1");
        Answers answers = new Answers();
        answers.setText("Option 1");
        answers.setCorrect(true);
        entity1.setAnswers(new HashSet<>(Arrays.asList(answers)));

        when(repository.findAll()).thenReturn(Collections.emptyList());
        when(parserService.parseDataFile("0")).thenReturn(Arrays.asList(entity1));

        List<FlashCardDto> result = service.getAllCards();

        assertEquals(1, result.size());
        assertEquals("Test Question 1", result.get(0).getQuestion());
        verify(repository, times(1)).findAll();
        verify(repository, times(1)).saveAll(any());
        verify(warehouse, times(1)).seed(any());
    }

    @Test
    void testGetRandomCardWithoutRepetition() {
        FlashCardDto expectedCard = FlashCardDto.builder()
                .id(1)
                .question("Random Question")
                .multiSelect(false)
                .build();

        when(warehouse.takeFirst()).thenReturn(java.util.Optional.of(expectedCard));

        FlashCardDto result = service.getRandomCardWithoutRepetition();

        assertEquals(expectedCard, result);
        verify(warehouse, times(1)).takeFirst();
    }

    @Test
    void testRegisterAnswerQuestionExistsIncorrect() {
        QuestionEntity entity = new QuestionEntity();
        entity.setId(1L);
        entity.setQuestion("Test Question");
        Answers answers1 = new Answers();
        answers1.setText("Option 1");
        answers1.setCorrect(true);
        Answers answers2 = new Answers();
        answers2.setText("Option 2");
        answers2.setCorrect(false);
        entity.setAnswers(new HashSet<>(Arrays.asList(answers1, answers2)));

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        List<String> selectedOptions = List.of("\"Option 2\"");
        AnswerDto result = service.registerAnswer(1L, selectedOptions);

        assertFalse(result.isCorrect());
        assertEquals("Test Question", result.getQuestion());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testRegisterAnswerQuestionNotExists() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        List<String> selectedOptions = List.of("\"Option 1\"");
        AnswerDto result = service.registerAnswer(1L, selectedOptions);

        assertFalse(result.isCorrect());
        assertEquals("", result.getQuestion());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testGetAnswers() {
        AnswerDto answer1 = AnswerDto.builder()
                .id(1L)
                .correct(true)
                .question("Question 1")
                .build();

        AnswerDto answer2 = AnswerDto.builder()
                .id(2L)
                .correct(false)
                .question("Question 2")
                .build();

        Set<AnswerDto> result = service.getAnswers();

    }

    @Test
    void testGetAvailableCards() {
        FlashCardDto card1 = FlashCardDto.builder()
                .id(1)
                .question("Available Question 1")
                .options(new HashSet<>(Arrays.asList("Option 1")))
                .multiSelect(false)
                .build();

        FlashCardDto card2 = FlashCardDto.builder()
                .id(2)
                .question("Available Question 2")
                .options(new HashSet<>(Arrays.asList("Option 2")))
                .multiSelect(false)
                .build();

        List<FlashCardDto> availableCards = Arrays.asList(card1, card2);
        when(warehouse.snapshotAvailable()).thenReturn(availableCards);

        List<FlashCardDto> result = service.getAvailableCards();

        assertEquals(availableCards, result);
        verify(warehouse, times(1)).snapshotAvailable();
    }

    @Test
    void testRemoveCardNotExists() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        FlashCardDto result = service.removeCard(1L);

        assertEquals(new FlashCardDto(), result);
        verify(repository, times(1)).findById(1L);
        verify(repository, never()).deleteById(any());
        verify(warehouse, never()).removeById(any());
    }

    @Test
    void testDeleteAll() {
        service.deleteAll();

        verify(warehouse, times(1)).clear();
        verify(repository, times(1)).deleteAll();
    }

    @Test
    void testSaveAll() {
        String filenameIndex = "1";
        List<QuestionEntity> mockCards = List.of(new QuestionEntity());

        when(parserService.parseDataFile(filenameIndex)).thenReturn(mockCards);

        service.saveAll(filenameIndex);

        verify(parserService, times(1)).parseDataFile(filenameIndex);
        verify(repository, times(1)).saveAll(mockCards);
    }
}