import React, { useState, useEffect } from "react";
import { FlashCardDto, AnswerDto } from "../types";
import { getAvailableQuestions, submitAnswer } from "../api";
import Question from "../components/Question";

export default function QuizPage() {
  const [cards, setCards] = useState<FlashCardDto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAvailableQuestions().then((data) => {
      setCards(data);
      setLoading(false);
    });
  }, []);

  const handleAnswerSubmit = async (cardId: number, selectedOptions: string[]) => {
    const answer = await submitAnswer(cardId, selectedOptions);
    setAnswers((prev) => [...prev, answer]);
    setCurrentIndex((prev) => prev + 1);
  };

  if (loading) return <div>Loading...</div>;
  if (cards.length === 0 || currentIndex >= cards.length) return <div>No more questions</div>;

  const currentCard = cards[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Question
        key={currentCard.id}
        card={currentCard}
        onSubmit={(selectedOptions) => handleAnswerSubmit(currentCard.id, selectedOptions)}
      />
    </div>
  );
}
