import React, { useEffect, useState } from "react";
import { AnswerDto } from "../types";
import { getAnswers } from "../api";

export default function ResultReviewPage() {
  const [answers, setAnswers] = useState<AnswerDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnswers().then((data) => {
      setAnswers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {answers.map((answer, idx) => (
        <div key={answer.card.id} className="mb-6 border rounded-lg p-4 shadow">
          <div className="mb-2 flex justify-between items-center">
            <p className="font-bold text-sm">Question {idx + 1}</p>
            <span
              className={`px-2 py-1 text-xs rounded ${
                answer.correct
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {answer.correct ? "Correct" : "Incorrect"}
            </span>
          </div>
          <div className="font-medium mb-2">{answer.card.question}</div>
          <ul className="mb-2">
            {answer.card.options.map((option) => (
              <li
                key={option.text}
                className={`pl-2 mb-1 ${
                  option.correct ? "font-bold text-green-600" : ""
                }`}
              >
                {option.text}
              </li>
            ))}
          </ul>
          <div className="text-sm text-gray-700 whitespace-pre-wrap">
            {answer.explanation}
          </div>
        </div>
      ))}
    </div>
  );
}
