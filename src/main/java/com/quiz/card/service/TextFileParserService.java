package com.quiz.card.service;

import com.quiz.card.model.Answers;
import com.quiz.card.model.QuestionEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class TextFileParserService {

    private final ResourceLoader resourceLoader;
    private final static Logger LOGGER = LoggerFactory.getLogger(TextFileParserService.class);

    public List<QuestionEntity> parseDataFile(String index) {
        String location = String.format("classpath:quiz-set_%s.md", index);
        Resource resource = resourceLoader.getResource(location);
        List<QuestionEntity> questionEntities = new ArrayList<>();
        List<String> sections = new ArrayList<>();
        LOGGER.info("{}", location);

        try {
            sections.addAll(List.of(resource.getContentAsString(StandardCharsets.UTF_8).split("##\\s*\\d+\\.")));
        } catch (IOException e) {
            LOGGER.error("{}", e.getMessage());
        }

        int size = sections.size();
        if (size != 66) {
            LOGGER.error("Size: must be 66, but was {}", size);
        }

        IntStream.range(1, sections.size())
                .mapToObj(i -> parseSection(sections.get(i)))
                .forEach(questionEntities::add);

        return questionEntities;
    }

    private QuestionEntity parseSection(String section) {
        String[] lines = section.trim().split("(?m)(?:\\r?\\n){2,}");
        StringBuilder question = new StringBuilder();

        if (lines.length != 4) {
            LOGGER.error("Size: must be 4, but was {}", Arrays.toString(lines));
        }

        question.append(lines[0]);

        String[] answer = lines[2].replace("**Explanation:**", "").split("\\.\\r?\\n");

        Set<Answers> answers = Arrays.stream(answer).map(String::trim)
                .filter(trim -> !trim.isEmpty())
                .map(trim -> Answers.builder()
                        .text(trim)
                        .correct(false)
                        .build()).collect(Collectors.toCollection(LinkedHashSet::new));

        Set<Answers> finalAnswers = setAnswers(answers);

        Set<String> optionSet = Arrays.stream(lines[1].split("- "))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toCollection(LinkedHashSet::new));

        return QuestionEntity.builder()
                .question(question.toString())
                .options(new HashSet<>(optionSet))
                .answers(finalAnswers)
                .build();
    }

    private Set<Answers> setAnswers(Set<Answers> answers) {
        return answers.stream().map(answer -> answer.getText().contains("is correct") ?
                new Answers(answer.getText().replace(" is correct", ""), true) :
                new Answers(answer.getText().replace(" is incorrect", ""), false))
                .collect(Collectors.toSet());
    }
}
