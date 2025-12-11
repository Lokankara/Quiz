package com.quiz.card.service;

import com.quiz.card.model.Answers;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuestionEntity;

public class FlashCardMapper {

    public static FlashCardDto toDto(QuestionEntity card) {
        return FlashCardDto.builder()
                .id(card.getId())
                .question(card.getQuestion())
                .multiSelect(card.getAnswers().stream()
                        .filter(Answers::isCorrect)
                        .count() > 1)
                .options(card.getOptions())
                .build();
    }
}
