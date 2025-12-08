package com.quiz.card.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.Option;
import com.quiz.card.model.QuestionEntity;
import com.quiz.card.model.ResultDto;
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
import java.util.stream.Collectors;

@ExtendWith(MockitoExtension.class)
class QuestionServiceTest {

    @Mock
    private Warehouse warehouse;

    @Mock
    private QuestionRepository repository;

    @Mock
    private TextFileParserService parserService;

    private QuestionService questionService;

    @BeforeEach
    void setUp() {
        questionService = new QuestionService(warehouse, repository, parserService);
    }

    @Test
    void testGetAllCards_CacheMiss() {
        QuestionEntity entity1 = new QuestionEntity();
        entity1.setId(1L);
        entity1.setQuestion("Test Question 1");
        Option option = new Option();
        option.setText("Option 1");
        option.setCorrect(true);
        entity1.setOptions(new HashSet<>(Arrays.asList(option)));
        entity1.setExplanation("Explanation 1");

        FlashCardDto dto1 = FlashCardDto.builder()
                .id(1)
                .question("Test Question 1")
                .options(new HashSet<>(Arrays.asList("Option 1")))
                .explanation("Explanation 1")
                .multiSelect(false)
                .build();

        when(repository.findAll()).thenReturn(Arrays.asList(entity1));
        when(warehouse.takeFirst()).thenReturn(java.util.Optional.of(dto1));

        List<FlashCardDto> result = questionService.getAllCards();

        assertEquals(1, result.size());
        assertEquals("Test Question 1", result.get(0).getQuestion());
        verify(repository, times(1)).findAll();
        verify(warehouse, times(1)).seed(any());
    }

    @Test
    void testGetAllCards_CacheMiss_EmptyRepo() {
        QuestionEntity entity1 = new QuestionEntity();
        entity1.setId(1L);
        entity1.setQuestion("Test Question 1");
        Option option = new Option();
        option.setText("Option 1");
        option.setCorrect(true);
        entity1.setOptions(new HashSet<>(Arrays.asList(option)));
        entity1.setExplanation("Explanation 1");

        when(repository.findAll()).thenReturn(Collections.emptyList());
        when(parserService.parseDataFile("0")).thenReturn(Arrays.asList(entity1));

        List<FlashCardDto> result = questionService.getAllCards();

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
                .options(new HashSet<>(Arrays.asList("Option 1")))
                .explanation("Explanation")
                .multiSelect(false)
                .build();

        when(warehouse.takeFirst()).thenReturn(java.util.Optional.of(expectedCard));

        FlashCardDto result = questionService.getRandomCardWithoutRepetition();

        assertEquals(expectedCard, result);
        verify(warehouse, times(1)).takeFirst();
    }

    @Test
    void testGetResult() {
        AnswerDto answer1 = AnswerDto.builder()
                .id(1L)
                .correct(true)
                .question("Question 1")
                .explanation("Explanation 1")
                .build();

        AnswerDto answer2 = AnswerDto.builder()
                .id(2L)
                .correct(false)
                .question("Question 2")
                .explanation("Explanation 2")
                .build();

        Set<AnswerDto> answers = new HashSet<>(Arrays.asList(answer1, answer2));
        
        java.lang.reflect.Field answerMapField;
        try {
            answerMapField = QuestionService.class.getDeclaredField("answerMap");
            answerMapField.setAccessible(true);
            @SuppressWarnings("unchecked")
            java.util.Set<AnswerDto> answerMap = (java.util.Set<AnswerDto>) answerMapField.get(questionService);
            answerMap.addAll(answers);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        ResultDto result = questionService.getResult();

        assertEquals(2, result.getTotal());
        assertEquals(1, result.getCorrect());
        assertEquals(1, result.getIncorrect());
        assertTrue(result.getAnswered().containsKey(1L));
        assertTrue(result.getAnswered().containsKey(2L));
    }

    @Test
    void testRegisterAnswer_QuestionExists_Correct() {
        QuestionEntity entity = new QuestionEntity();
        entity.setId(1L);
        entity.setQuestion("Test Question");
        Option option1 = new Option();
        option1.setText("Option 1");
        option1.setCorrect(true);
        Option option2 = new Option();
        option2.setText("Option 2");
        option2.setCorrect(false);
        entity.setOptions(new HashSet<>(Arrays.asList(option1, option2)));
        entity.setExplanation("Explanation");

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        List<String> selectedOptions = Arrays.asList("\"Option 1\"");
        AnswerDto result = questionService.registerAnswer(1L, selectedOptions);

        assertTrue(result.isCorrect());
        assertEquals("Test Question", result.getQuestion());
        assertEquals("Explanation", result.getExplanation());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testRegisterAnswer_QuestionExists_Incorrect() {
        QuestionEntity entity = new QuestionEntity();
        entity.setId(1L);
        entity.setQuestion("Test Question");
        Option option1 = new Option();
        option1.setText("Option 1");
        option1.setCorrect(true);
        Option option2 = new Option();
        option2.setText("Option 2");
        option2.setCorrect(false);
        entity.setOptions(new HashSet<>(Arrays.asList(option1, option2)));
        entity.setExplanation("Explanation");

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        List<String> selectedOptions = Arrays.asList("\"Option 2\"");
        AnswerDto result = questionService.registerAnswer(1L, selectedOptions);

        assertFalse(result.isCorrect());
        assertEquals("Test Question", result.getQuestion());
        assertEquals("Explanation", result.getExplanation());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testRegisterAnswer_QuestionNotExists() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        List<String> selectedOptions = Arrays.asList("\"Option 1\"");
        AnswerDto result = questionService.registerAnswer(1L, selectedOptions);

        assertFalse(result.isCorrect());
        assertEquals("", result.getExplanation());
        assertEquals("", result.getQuestion());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testGetAnswers() {
        AnswerDto answer1 = AnswerDto.builder()
                .id(1L)
                .correct(true)
                .question("Question 1")
                .explanation("Explanation 1")
                .build();

        AnswerDto answer2 = AnswerDto.builder()
                .id(2L)
                .correct(false)
                .question("Question 2")
                .explanation("Explanation 2")
                .build();

        Set<AnswerDto> expectedAnswers = new HashSet<>(Arrays.asList(answer1, answer2));
        
        java.lang.reflect.Field answerMapField;
        try {
            answerMapField = QuestionService.class.getDeclaredField("answerMap");
            answerMapField.setAccessible(true);
            @SuppressWarnings("unchecked")
            java.util.Set<AnswerDto> answerMap = (java.util.Set<AnswerDto>) answerMapField.get(questionService);
            answerMap.addAll(expectedAnswers);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        Set<AnswerDto> result = questionService.getAnswers();

        assertEquals(expectedAnswers, result);
    }

    @Test
    void testGetAvailableCards() {
        FlashCardDto card1 = FlashCardDto.builder()
                .id(1)
                .question("Available Question 1")
                .options(new HashSet<>(Arrays.asList("Option 1")))
                .explanation("Explanation 1")
                .multiSelect(false)
                .build();

        FlashCardDto card2 = FlashCardDto.builder()
                .id(2)
                .question("Available Question 2")
                .options(new HashSet<>(Arrays.asList("Option 2")))
                .explanation("Explanation 2")
                .multiSelect(false)
                .build();

        List<FlashCardDto> availableCards = Arrays.asList(card1, card2);
        when(warehouse.snapshotAvailable()).thenReturn(availableCards);

        List<FlashCardDto> result = questionService.getAvailableCards();

        assertEquals(availableCards, result);
        verify(warehouse, times(1)).snapshotAvailable();
    }

    @Test
    void testRemoveCard_Exists() {
        QuestionEntity entity = new QuestionEntity();
        entity.setId(1L);
        entity.setQuestion("Test Question");
        Option option = new Option();
        option.setText("Option 1");
        option.setCorrect(true);
        entity.setOptions(new HashSet<>(Arrays.asList(option)));
        entity.setExplanation("Explanation");

        FlashCardDto expectedCard = FlashCardDto.builder()
                .id(1)
                .question("Test Question")
                .options(new HashSet<>(Arrays.asList("Option 1")))
                .explanation("Explanation")
                .multiSelect(false)
                .build();

        when(repository.findById(1L)).thenReturn(Optional.of(entity));
        when(repository.findById(2L)).thenReturn(Optional.empty());

        FlashCardDto result = questionService.removeCard(1L);

        assertEquals(expectedCard, result);
        verify(repository, times(1)).findById(1L);
        verify(repository, times(1)).deleteById(1L);
        verify(warehouse, times(1)).removeById(1L);
    }

    @Test
    void testRemoveCard_NotExists() {
        when(repository.findById(1L)).thenReturn(Optional.empty());

        FlashCardDto result = questionService.removeCard(1L);

        assertEquals(new FlashCardDto(), result);
        verify(repository, times(1)).findById(1L);
        verify(repository, never()).deleteById(any());
        verify(warehouse, never()).removeById(any());
    }

    @Test
    void testDeleteAll() {
        questionService.deleteAll();

        verify(warehouse, times(1)).clear();
        verify(repository, times(1)).deleteAll();
    }

    @Test
    void testSaveAll() {
        String filenameIndex = "1";
        List<QuestionEntity> mockCards = Arrays.asList(new QuestionEntity());

        when(parserService.parseDataFile(filenameIndex)).thenReturn(mockCards);

        questionService.saveAll(filenameIndex);

        verify(parserService, times(1)).parseDataFile(filenameIndex);
        verify(repository, times(1)).saveAll(mockCards);
    }
}