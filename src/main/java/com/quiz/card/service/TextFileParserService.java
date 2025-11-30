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
        List<QuestionEntity> cards = new ArrayList<>();
        String location = String.format("classpath:quiz-set_%s.md", index);
        Resource resource = resourceLoader.getResource(location);

        try {
            String[] sections = resource.getContentAsString(StandardCharsets.UTF_8).split("##\\s*\\d+\\.");
            IntStream.range(1, sections.length)
                    .mapToObj(i -> parseSection(sections[i].trim()))
                    .forEach(cards::add);
        } catch (IOException e) {
            LOGGER.error("{}", e.getMessage());
        }

        return cards;
    }

    private QuestionEntity parseSection(String section) {
        String[] lines = section.split("\\r?\\n");
        StringBuilder question = new StringBuilder();
        StringBuilder explanation = new StringBuilder();
        Set<Option> options = new LinkedHashSet<>();
        boolean inExplanation = false;

        for (String line : lines) {
             line = line.replaceAll("-{3,}", "")
               .replaceAll("\\s*-{3,}\\s*", "")
               .trim();

            if (line.isEmpty())
                continue;

            if (line.startsWith("- ")) {
                options.add(Option.builder()
                        .text(line.substring(2).trim())
                        .correct(false)
                        .build());
            } else if (line.startsWith("**Explanation:**")) {
                inExplanation = true;
                explanation = new StringBuilder(line.replace("**Explanation:**", "").trim());
            } else if (inExplanation) {
                explanation.append(" ").append(line);
            } else {
                question.append((question.isEmpty()) ? "" : " ").append(line);
            }
        }

        Set<String> correctTexts = extractCorrectOptions(explanation.toString());

        Set<Option> finalOptions = options.stream()
                .map(o -> Option.builder()
                        .text(o.getText())
                        .correct(correctTexts.contains(o.getText()))
                        .build())
                .collect(Collectors.toCollection(LinkedHashSet::new));

        return QuestionEntity.builder()
                .question(question.toString())
                .options(finalOptions)
                .explanation(explanation.toString())
                .build();
    }

    private Set<String> extractCorrectOptions(String explanation) {
        Set<String> correctOptions = new HashSet<>();

        Pattern multiPattern =
                Pattern.compile("\"([^\"]+)\"\\s+and\\s+\"([^\"]+)\"\\s+are\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher multiMatcher = multiPattern.matcher(explanation);
        while (multiMatcher.find()) {
            correctOptions.add(multiMatcher.group(1).trim());
            correctOptions.add(multiMatcher.group(2).trim());
        }

        Pattern singlePattern = Pattern.compile("\"([^\"]+)\"\\s+is\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher singleMatcher = singlePattern.matcher(explanation);
        while (singleMatcher.find()) {
            correctOptions.add(singleMatcher.group(1).trim());
        }

        return correctOptions;
    }
}
