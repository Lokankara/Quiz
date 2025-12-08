package com.quiz.card.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswerDto {
    private long id;
    private boolean correct;
    private String question;
    private String explanation;
}
