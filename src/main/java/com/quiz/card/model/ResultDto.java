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
public class ResultDto {
    private long total;
    private long correct;
    private long incorrect;
    private Set<Long> answeredIds;
}
