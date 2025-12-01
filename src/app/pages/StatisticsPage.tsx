import { useEffect, useMemo, useState } from "react";
import { getAnswers } from "../api";
import { AnswerDto } from "../types";

export const StatisticsPage = () => {
  const [answers, setAnswers] = useState<AnswerDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAnswers();
        setAnswers(res);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const totalCount = answers.length;
  const correctCount = useMemo(() => answers.filter(a => a.correct).length, [answers]);
  const incorrectCount = totalCount - correctCount;
  const scorePercentage = totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100);

  if (loading) return null;

  return (
    <section className="border rounded-lg bg-white shadow" aria-label="Exam results">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-1">
              <span className="mr-4">Exam results</span>
              <span>Attempted on <b>{new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</b></span>
            </div>
            <h2 className="text-xl font-bold mb-4">Practice Quiz Results</h2>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Exam score: <b>{scorePercentage}%</b></span>
                <span>{correctCount}/{totalCount}</span>
              </div>
              <div className="flex space-x-4">
                <span>Untimed exam</span>
              </div>
              <div className="flex space-x-4">
                <span><b>{correctCount}</b> correct answers</span>
                <span><b>{incorrectCount}</b> incorrect answers</span>
                <span><b>0</b> unanswered questions</span>
              </div>
            </div>
          </div>
          <div className="text-center ml-6">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="40" cy="40" r="36" stroke="#3b82f6" strokeWidth="8" fill="none"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - scorePercentage / 100)}`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold">{scorePercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
