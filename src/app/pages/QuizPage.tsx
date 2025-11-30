import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FlashCardDto, AnswerDto } from "../types";
import { getAllQuestions, submitAnswer } from "../api";
import Question from "../components/Question";
import AnswerFeedback from "../components/AnswerFeedback";

export default function QuizPage() {
  const [answerResult, setAnswerResult] = useState<AnswerDto | null>(null);
  const [cards, setCards] = useState<FlashCardDto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    getAllQuestions().then((data) => {
      if (!mountedRef.current) return;
      setCards(data);
      setLoading(false);
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleAnswerSubmit = async (cardId: number, selectedOptions: string[]) => {
    const answer = await submitAnswer(cardId, selectedOptions);
    setAnswerResult(answer);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!loading && currentIndex >= cards.length) {
      navigate("/results");
    }
  }, [loading, currentIndex, cards.length, navigate]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (cards.length === 0) {
    navigate("/results");
    return null;
  }
  if (currentIndex >= cards.length) return null;

  const currentCard = cards[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-4">
        <Question
          size={cards.length}
          key={currentIndex + 1}
          index={currentIndex}
          card={currentCard}
          onSubmit={(selectedOptions) => handleAnswerSubmit(currentCard.id, selectedOptions)}
        />

      {answerResult && (
        <AnswerFeedback
          answerResult={answerResult}
          explanationTitle={currentCard.question}
        />
      )}
    </div>
  );
}
