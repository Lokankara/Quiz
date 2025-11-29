package com.quiz.card.service;

import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuestionEntity;

import java.util.ArrayList;

public class FlashCardMapper {

    public static FlashCardDto toDto(QuestionEntity card) {
        return FlashCardDto.builder()
                .id(card.getId())
                .question(card.getQuestion())
                .options(new ArrayList<>(card.getOptions()))
                .explanation(card.getExplanation())
                .build();
    }
}
