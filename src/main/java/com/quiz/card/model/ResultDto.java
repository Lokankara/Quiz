package com.quiz.card.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResultDto {
    private long total;
    private long correct;
    private long incorrect;
    private Map<Long, String> answered;
}
