package com.quiz.card.service;

import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.Option;
import com.quiz.card.model.QuestionEntity;

import java.util.stream.Collectors;

public class FlashCardMapper {

    public static FlashCardDto toDto(QuestionEntity card) {
        return FlashCardDto.builder()
                .id(card.getId())
                .question(card.getQuestion())
                .options(card.getOptions()
                        .stream()
                        .map(Option::getText)
                        .collect(Collectors.toSet()))
                .build();
    }
}
