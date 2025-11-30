package com.quiz.card.service;

import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.Option;
import com.quiz.card.model.QuestionEntity;

import java.util.stream.Collectors;

public class FlashCardMapper {

    public static FlashCardDto toDto(QuestionEntity card) {
        return FlashCardDto.builder()
                .id(card.getId())
                .explanation(card.getExplanation())
                .question(card.getQuestion())
                .multiSelect(card.getOptions().stream()
                        .filter(Option::isCorrect)
                        .count() > 1)
                .options(card.getOptions()
                        .stream()
                        .map(Option::getText)
                        .collect(Collectors.toSet()))
                .build();
    }
}
