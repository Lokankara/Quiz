package com.quiz.card.service;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.ResultDto;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.List;
import java.util.Set;

public interface IQuestionService {

    List<FlashCardDto> getAllCards();

    ResultDto getResult();

    List<FlashCardDto> getAvailableCards();

    AnswerDto registerAnswer(Long id, List<String> selectedOptions);

    Set<AnswerDto> getAnswers();

    FlashCardDto getRandomCardWithoutRepetition();

    FlashCardDto removeCard(Long id);

    SseEmitter subscribeAvailable();

    void deleteAll();

    void saveAll(String filenameIndex);
}
