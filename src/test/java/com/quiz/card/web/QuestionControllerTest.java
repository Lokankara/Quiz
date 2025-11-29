package com.quiz.card.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.quiz.card.CardApplication;
import com.quiz.card.model.AnswerDto;
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
import java.util.Set;

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
        mvc.perform(get("/api/questions"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").exists())
                .andExpect(jsonPath("$[0].question").exists())
                .andExpect(jsonPath("$[0].options").isArray());
    }

    @Test
    void testRandom() throws Exception {
        mvc.perform(get("/api/questions/random"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.question").exists());
    }

    @Test
    void testResult() throws Exception {
        mvc.perform(get("/api/questions/result"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.total").exists())
                .andExpect(jsonPath("$.correct").exists())
                .andExpect(jsonPath("$.incorrect").exists());
    }

    @Test
    void testAvailable() throws Exception {
        mvc.perform(get("/api/questions/available"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void testRegisterAnswer() throws Exception {
        Long id = allCards.getFirst().getId();

        mvc.perform(post("/api/questions/answers")
                        .param("id", id.toString())
                        .param("options", allCards.getFirst().getOptions().iterator().next())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.correct").exists())
                .andExpect(jsonPath("$.id").value(id))
                .andExpect(jsonPath("$.explanation").exists());
    }

    @Test
    void testGetAnswers() throws Exception {
        Set<AnswerDto> before = service.getAnswers();

        Long id = allCards.getFirst().getId();
        mvc.perform(post("/api/questions/answers")
                .param("id", id.toString())
                .param("options", allCards.getFirst().getOptions().iterator().next()));

        mvc.perform(get("/api/questions/answers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void testAvailableCount() throws Exception {
        mvc.perform(get("/api/questions/available/count"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isNumber());
    }

    @Test
    void testRemoveCard() throws Exception {
        Long id = allCards.getFirst().getId();

        mvc.perform(delete("/api/questions").param("id", id.toString()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(id));
    }
}