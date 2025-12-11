//package com.quiz.card.web;
//
//import static org.mockito.Mockito.anyList;
//import static org.mockito.Mockito.anyLong;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import com.quiz.card.model.AnswerDto;
//import com.quiz.card.model.FlashCardDto;
//import com.quiz.card.model.ResultDto;
//import com.quiz.card.service.IQuestionService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//
//import java.util.Collections;
//import java.util.HashMap;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//@WebMvcTest(QuestionController.class)
//class QuestionControllerIntegrationTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private IQuestionService questionService;
//
//    private List<FlashCardDto> mockCards;
//    private FlashCardDto mockCard;
//    private AnswerDto mockAnswer;
//    private ResultDto mockResult;
//
//    @BeforeEach
//    void setUp() {
//        mockCard = FlashCardDto.builder()
//                .id(1)
//                .question("Test Question")
//                .options(new HashSet<>(List.of("Option 1", "Option 2")))
//                .multiSelect(false)
//                .build();
//
//        mockCards = Collections.singletonList(mockCard);
//
//        mockAnswer = AnswerDto.builder()
//                .id(1L)
//                .question("Test Question")
//                .correct(true)
//                .explanation("Explanation")
//                .build();
//
//        mockResult = ResultDto.builder()
//                .total(1)
//                .correct(1)
//                .incorrect(0)
//                .answered(new HashMap<>())
//                .build();
//    }
//
//    @Test
//    void testAllQuestions() throws Exception {
//        when(questionService.getAllCards()).thenReturn(mockCards);
//
//        mockMvc.perform(get("/api/questions"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].id").value(1))
//                .andExpect(jsonPath("$[0].question").value("Test Question"))
//                .andExpect(jsonPath("$[0].options").isArray());
//    }
//
//    @Test
//    void testRandomQuestion() throws Exception {
//        when(questionService.getRandomCardWithoutRepetition()).thenReturn(mockCard);
//
//        mockMvc.perform(get("/api/questions/random"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.id").value(1))
//                .andExpect(jsonPath("$.question").value("Test Question"));
//    }
//
//    @Test
//    void testGetResult() throws Exception {
//        when(questionService.getResult()).thenReturn(mockResult);
//
//        mockMvc.perform(get("/api/questions/result"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.total").value(1))
//                .andExpect(jsonPath("$.correct").value(1))
//                .andExpect(jsonPath("$.incorrect").value(0));
//    }
//
//    @Test
//    void testGetAvailableQuestions() throws Exception {
//        when(questionService.getAvailableCards()).thenReturn(mockCards);
//
//        mockMvc.perform(get("/api/questions/available"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].id").value(1))
//                .andExpect(jsonPath("$[0].question").value("Test Question"));
//    }
//
//    @Test
//    void testRegisterAnswer() throws Exception {
//        when(questionService.registerAnswer(anyLong(), anyList())).thenReturn(mockAnswer);
//
//        mockMvc.perform(post("/api/questions/answers")
//                        .param("id", "1")
//                        .param("options", "Option 1")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.id").value(1))
//                .andExpect(jsonPath("$.correct").value(true))
//                .andExpect(jsonPath("$.explanation").value("Explanation"));
//    }
//
//    @Test
//    void testRegisterAnswerWithMultipleOptions() throws Exception {
//        when(questionService.registerAnswer(anyLong(), anyList())).thenReturn(mockAnswer);
//
//        mockMvc.perform(post("/api/questions/answers")
//                        .param("id", "1")
//                        .param("options", "Option 1", "Option 2")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.id").value(1))
//                .andExpect(jsonPath("$.correct").value(true));
//    }
//
//    @Test
//    void testRegisterAnswerInvalidId() throws Exception {
//        mockMvc.perform(post("/api/questions/answers")
//                        .param("id", "-1")
//                        .param("options", "Option 1")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isBadRequest());
//    }
//
//    @Test
//    void testRegisterAnswerNullOptions() throws Exception {
//        mockMvc.perform(post("/api/questions/answers")
//                        .param("id", "1")
//                        .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isBadRequest());
//    }
//
//    @Test
//    void testGetAnswers() throws Exception {
//        Set<AnswerDto> answers = new HashSet<>();
//        answers.add(mockAnswer);
//        when(questionService.getAnswers()).thenReturn(answers);
//
//        mockMvc.perform(get("/api/questions/answers"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].id").value(1))
//                .andExpect(jsonPath("$[0].question").value("Test Question"))
//                .andExpect(jsonPath("$[0].correct").value(true));
//    }
//
//    @Test
//    void testGetAvailableCount() throws Exception {
//        when(questionService.getAvailableCards()).thenReturn(mockCards);
//
//        mockMvc.perform(get("/api/questions/available/count"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$").value(1));
//    }
//
//    @Test
//    void testRemoveCard() throws Exception {
//        when(questionService.removeCard(anyLong())).thenReturn(mockCard);
//
//        mockMvc.perform(delete("/api/questions")
//                        .param("id", "1"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.id").value(1))
//                .andExpect(jsonPath("$.question").value("Test Question"));
//    }
//
//    @Test
//    void testRemoveCardInvalidId() throws Exception {
//        mockMvc.perform(delete("/api/questions")
//                        .param("id", "-1"))
//                .andExpect(status().isBadRequest());
//    }
//
//    @Test
//    void testRestartQuiz() throws Exception {
//        mockMvc.perform(post("/api/questions/restart")
//                        .param("fileIndex", "1"))
//                .andExpect(status().isNoContent());
//
//        verify(questionService, times(1)).deleteAll();
//        verify(questionService, times(1)).saveAll("1");
//    }
//
//    @Test
//    void testRestartQuizInvalidFileIndex() throws Exception {
//        mockMvc.perform(post("/api/questions/restart")
//                        .param("fileIndex", "invalid"))
//                .andExpect(status().isBadRequest());
//    }
//
//    @Test
//    void testRestartQuizOutOfRangeFileIndex() throws Exception {
//        mockMvc.perform(post("/api/questions/restart")
//                        .param("fileIndex", "10"))
//                .andExpect(status().isBadRequest());
//    }
//}