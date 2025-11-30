package com.quiz.card.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FlashCardDto {
    private long id;
    private String question;
    private String explanation;
    private Set<String> options;
    private boolean multiSelect;
}
