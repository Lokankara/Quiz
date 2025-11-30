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
        String location = String.format("quiz-set_%s.md", index);
        Resource resource = resourceLoader.getResource(location);
        try{
            String[] sections = resource.getContentAsString(StandardCharsets.UTF_8).split("##\\s*\\d+\\.");
            IntStream.range(1, sections.length).mapToObj(i -> parseSection(sections[i].trim())).forEach(cards::add);
        } catch (IOException e) {
            LOGGER.error("{}", e.getMessage());
        }
        return cards;
    }

    private QuestionEntity parseSection(String section) {
        String[] lines = section.split("\n");
        if (lines.length == 0) {
            return null;
        }

        String question = lines[0].trim();
        List<String> options = new ArrayList<>();
        StringBuilder explanationBuilder = new StringBuilder();
        boolean parsingExplanation = false;

        for (int i = 1; i < lines.length; i++) {
            String line = lines[i].replaceAll("---", "").trim();

            if (line.isEmpty()) {
                continue;
            }

            if (line.startsWith("**Explanation:**")) {
                parsingExplanation = true;
                explanationBuilder.append(line.replace("**Explanation:**", "").trim()).append("\n");
            } else if (parsingExplanation) {
                explanationBuilder.append(line).append("\n");
            } else if (line.startsWith("-")) {
                options.add(line.substring(1).trim());
            }
        }

        return getFlashCard(question, options, explanationBuilder);
    }

    private QuestionEntity getFlashCard(String question, List<String> options, StringBuilder explanationBuilder) {
        String explanation = explanationBuilder.toString().trim();
        Set<Option> optionSet = extractOptions(options, explanation);

        return QuestionEntity.builder()
                .question(question)
                .options(optionSet)
                .explanation(explanation)
                .build();
    }

    private Set<Option> extractOptions(List<String> options, String explanation) {
        Set<String> correctOptions = extractCorrectOptionsFromExplanation(explanation);

        return options.stream()
                .map(opt -> Option.builder()
                        .text(opt)
                        .correct(correctOptions.contains(opt))
                        .build())
                .collect(Collectors.toSet());
    }

    private Set<String> extractCorrectOptionsFromExplanation(String explanation) {
        Set<String> correct = new HashSet<>();
        if (explanation == null || explanation.isEmpty())
            return correct;

        String[] sentences = explanation.split("[\\r\\n]+|(?<=\\.)");
        Pattern pCorrect = Pattern.compile("(?i)\\bcorrect\\b");
        Pattern pQuoted = Pattern.compile("\"([^\"]+)\"");
        Pattern pBeforeCorrect = Pattern.compile("(?i)([\\w\\s\\-:&]+?)\\bcorrect\\b");

        for (String sentence : sentences) {
            String s = sentence.trim();
            if (s.isEmpty())
                continue;

            Matcher mCorrect = pCorrect.matcher(s);
            if (!mCorrect.find())
                continue;

            Matcher mq = pQuoted.matcher(s);
            boolean found = false;
            while (mq.find()) {
                String g = mq.group(1).trim();
                if (!g.isEmpty()) {
                    correct.add(g);
                    found = true;
                }
            }
            if (found)
                continue;

            Matcher mb = pBeforeCorrect.matcher(s);
            if (mb.find()) {
                String group = mb.group(1);
                group = group.replaceAll("[\\*\\[\\]\\(\\)]+", "").trim();
                String[] parts = group.split("\\band\\b|,");
                for (String part : parts) {
                    String opt = part.replaceAll("^[\\-:\\s]+|[\\-:\\s]+$", "").trim();
                    if (!opt.isEmpty())
                        correct.add(opt);
                }
            }
        }
        return correct;
    }
}
