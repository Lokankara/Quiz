package com.quiz.card.service;

import com.quiz.card.model.Option;
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
import java.util.regex.Matcher;
import java.util.regex.Pattern;
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
        List<QuestionEntity> cards = new ArrayList<>();
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
                .forEach(cards::add);

        return cards;
    }

    private QuestionEntity parseSection(String section) {
        String[] lines = section.trim().split("(?m)(\\r\\n|\\n){2,}");
        StringBuilder question = new StringBuilder();

        if (lines.length != 4) {
            LOGGER.error("Size: must be 4, but was {}", section);
        }

        question.append(lines[0]);
        StringBuilder explanation = new StringBuilder(lines[2].replace("**Explanation:**", "").trim());

        String[] split = lines[1].split("- ");

        Set<Option> options = Arrays.stream(split).map(String::trim)
                .filter(trim -> !trim.isEmpty())
                .map(trim -> Option.builder()
                .text(trim)
                .correct(false)
                .build()).collect(Collectors.toCollection(LinkedHashSet::new));

        Set<String> correctTexts = extractCorrectOptions(explanation.toString());
        Set<Option> finalOptions = options.stream()
                .map(o -> Option.builder()
                        .text(o.getText())
                        .correct(correctTexts.contains(o.getText()))
                        .build())
                .collect(Collectors.toCollection(LinkedHashSet::new));

        for (Option option : finalOptions) {
            if (option.getText().split(" ").length < 2) {
                LOGGER.error("Option must be with full definition, but was {}", explanation);
            }
        }

        return QuestionEntity.builder()
                .question(question.toString())
                .options(finalOptions)
                .explanation(explanation.toString())
                .build();
    }

    private Set<String> extractCorrectOptions(String explanation) {
        Set<String> correctOptions = new HashSet<>();

        Pattern areCorrectPattern = Pattern.compile("\"([^\"]+)\"\\s+are\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher areCorrectMatcher = areCorrectPattern.matcher(explanation);
        while (areCorrectMatcher.find()) {
            String match = areCorrectMatcher.group(1).trim();
            String[] parts = match.split(",|\\s+and\\s+");
            for (String part : parts) {
                part = part.trim().replaceAll("^\"|\"$", "");
                if (!part.isEmpty()) {
                    correctOptions.add(part);
                }
            }
        }

        Pattern isCorrectPattern = Pattern.compile("\"([^\"]+)\"\\s+(?:is|are)\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher isCorrectMatcher = isCorrectPattern.matcher(explanation);
        while (isCorrectMatcher.find()) {
            String option = isCorrectMatcher.group(1).trim();
            if (!option.isEmpty()) {
                correctOptions.add(option);
            }
        }

        return correctOptions;
    }
}
