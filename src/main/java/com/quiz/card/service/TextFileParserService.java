package com.quiz.card.service;

import com.quiz.card.model.QuestionEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class TextFileParserService {

    private final ResourceLoader resourceLoader;
    private final String dataFilePath;

    public TextFileParserService(ResourceLoader resourceLoader, @Value("${quiz.data.file:classpath:quiz_data.md}") String dataFilePath) {
        this.resourceLoader = resourceLoader;
        this.dataFilePath = dataFilePath;
    }

    public List<QuestionEntity> parseDataFile() throws IOException {
        Resource resource = resourceLoader.getResource(dataFilePath);
        String fileContent = resource.getContentAsString(StandardCharsets.UTF_8);

        List<QuestionEntity> cards = new ArrayList<>();
        String[] sections = fileContent.split("##\\s*\\d+\\.");

        for (int i = 1; i < sections.length; i++) {
            cards.add(parseSection(sections[i].trim()));
        }

        return cards;
    }

    private QuestionEntity parseSection(String section) {
        String[] lines = section.split("\n");
        if (lines.length == 0) return null;

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
        return QuestionEntity.builder()
                .question(question)
                .options(options)
                .explanation(explanationBuilder.toString().trim())
                .build();
    }
}
