package com.quiz.card.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.quiz.card.model.QuestionEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.test.context.jdbc.Sql;

import java.util.List;

@DataJpaTest
@Sql(scripts = "/schema.sql")
class QuestionRepositoryTest {

    @Autowired
    private QuestionRepository questionRepository;

    @Test
    void testSaveAndFindAll() {
        QuestionEntity entity1 = new QuestionEntity();
        entity1.setQuestion("Test Question 1");

        QuestionEntity entity2 = new QuestionEntity();
        entity2.setQuestion("Test Question 2");

        QuestionEntity saved1 = questionRepository.save(entity1);
        QuestionEntity saved2 = questionRepository.save(entity2);

        assertNotNull(saved1.getId());
        assertNotNull(saved2.getId());

        List<QuestionEntity> allEntities = questionRepository.findAll();

        assertEquals(2, allEntities.size());
        assertTrue(allEntities.contains(saved1));
        assertTrue(allEntities.contains(saved2));
    }

    @Test
    void testFindById() {
        QuestionEntity entity = new QuestionEntity();
        entity.setQuestion("Test Question");
        QuestionEntity savedEntity = questionRepository.save(entity);

        var foundEntity = questionRepository.findById(savedEntity.getId());

        assertTrue(foundEntity.isPresent());
        assertEquals(savedEntity.getId(), foundEntity.get().getId());
        assertEquals("Test Question", foundEntity.get().getQuestion());
    }

    @Test
    void testDeleteById() {
        QuestionEntity entity = new QuestionEntity();
        entity.setQuestion("Test Question");
        QuestionEntity savedEntity = questionRepository.save(entity);

        assertTrue(questionRepository.findById(savedEntity.getId()).isPresent());

        questionRepository.deleteById(savedEntity.getId());

        assertFalse(questionRepository.findById(savedEntity.getId()).isPresent());
    }

    @Test
    void testFindAllEmpty() {
        List<QuestionEntity> allEntities = questionRepository.findAll();
        assertTrue(allEntities.isEmpty());
    }
}