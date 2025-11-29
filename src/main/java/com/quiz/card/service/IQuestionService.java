package com.quiz.card.service;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuizResultDto;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.List;

public interface IQuestionService {

    List<FlashCardDto> getAllCards();

    QuizResultDto getResult();

    List<FlashCardDto> getAvailableCards();

    AnswerDto registerAnswer(Long id, boolean correct);

    FlashCardDto getRandomCardWithoutRepetition();

    FlashCardDto removeCard(Long id);

    SseEmitter subscribeAvailable();
}
