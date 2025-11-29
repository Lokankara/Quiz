package com.quiz.card.web;

import com.quiz.card.CardApplication;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.service.IQuestionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest(classes = CardApplication.class)
class QuestionControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private IQuestionService service;

    private List<FlashCardDto> allCards;

    @BeforeEach
    void setup() {
        allCards = service.getAllCards();
    }

    @Test
    void testAllCards() throws Exception {
        FlashCardDto sample = service.getAllCards().getFirst();

        mvc.perform(get("/api/questions")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(sample.getId()))
                .andExpect(jsonPath("$[0].question").value(sample.getQuestion()));
    }

    @Test
    void testRandomCard() throws Exception {
        FlashCardDto sample = service.getRandomCardWithoutRepetition();

        mvc.perform(get("/api/questions/random")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(sample.getId()))
                .andExpect(jsonPath("$.question").value(sample.getQuestion()));
    }

    @Test
    void testAvailableCount() throws Exception {
        int count = service.getAvailableCards().size();

        mvc.perform(get("/api/questions/available/count"))
                .andExpect(status().isOk())
                .andExpect(content().string(String.valueOf(count)));

        assertEquals(allCards.size(), count);
    }

    @Test
    void testAll() throws Exception {

        mvc.perform(get("/api/questions").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].question").value("Sample?"));
    }

    @Test
    void testRandom() throws Exception {

        mvc.perform(get("/api/questions/random").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.question").value("Sample?"));
    }

    @Test
    void testResult() throws Exception {

        mvc.perform(get("/api/questions/result").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.total").value(1))
                .andExpect(jsonPath("$.correct").value(1))
                .andExpect(jsonPath("$.incorrect").value(0));
    }

    @Test
    void testAvailable() throws Exception {

        mvc.perform(get("/api/questions/available").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1));
    }

    @Test
    void testRegisterAnswer() throws Exception {
        mvc.perform(post("/api/questions/answer")
                        .param("id", "1")
                        .param("correct", "true"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.correct").value(true));
    }

    @Test
    void testRemoveCard() throws Exception {
        mvc.perform(delete("/api/questions")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1));
    }
}