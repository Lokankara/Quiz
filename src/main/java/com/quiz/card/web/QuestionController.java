package com.quiz.card.web;

import com.quiz.card.model.AnswerDto;
import com.quiz.card.model.FlashCardDto;
import com.quiz.card.model.QuizResultDto;
import com.quiz.card.service.IQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {

    private final IQuestionService service;

    @GetMapping
    public ResponseEntity<List<FlashCardDto>> all() {
        return ResponseEntity.ok(service.getAllCards());
    }

    @GetMapping("/random")
    public ResponseEntity<FlashCardDto> random() {
        FlashCardDto randomCard = service.getRandomCardWithoutRepetition();
        return ResponseEntity.ok(randomCard);
    }

    @GetMapping("/result")
    public ResponseEntity<QuizResultDto> result() {
        return ResponseEntity.ok(service.getResult());
    }

    @GetMapping("/available")
    public ResponseEntity<List<FlashCardDto>> available() {
        List<FlashCardDto> availableCards = service.getAvailableCards();
        return ResponseEntity.ok(availableCards);
    }

    @PostMapping("/answer")
    public ResponseEntity<AnswerDto> registerAnswer(
            @RequestParam Long id, @RequestParam boolean correct) {
        AnswerDto answer = service.registerAnswer(id, correct);
        return ResponseEntity.ok(answer);
    }


    @GetMapping("/available/count")
    public ResponseEntity<Integer> availableCount() {
        return ResponseEntity.ok(service.getAvailableCards().size());
    }

    @DeleteMapping
    public ResponseEntity<FlashCardDto> removeCard(@RequestParam Long id) {
        FlashCardDto deleted = service.removeCard(id);
        return ResponseEntity.ok(deleted);
    }
}
