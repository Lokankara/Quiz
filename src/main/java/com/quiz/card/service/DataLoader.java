package com.quiz.card.service;

import com.quiz.card.model.QuestionEntity;
import com.quiz.card.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final QuestionRepository repository;
    private final TextFileParserService parserService;

    @Override
    public void run(String... args) throws Exception {
        List<QuestionEntity> cards = parserService.parseDataFile();
        repository.saveAll(cards);
    }
}
