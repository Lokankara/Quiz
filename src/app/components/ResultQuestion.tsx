import { useEffect, useState } from "react";
import { AnswerDto } from "../types";
import { getAnswers } from "../api";

const ResultPage = () => {
    const [answers, setAnswers] = useState<AnswerDto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnswers = async () => {
            setLoading(true);
            try {
                const res = await getAnswers();
                setAnswers(res);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAnswers();
    }, []);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      );
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            {answers.map((answer, idx) => (
                <div key={answer.id || idx} className="mb-6 border rounded-lg p-4 shadow">
                    <div className="mb-2 flex justify-between items-center">
                        <p className="font-bold text-sm">Answer {idx + 1}</p>
                        <span className={`px-2 py-1 text-xs rounded ${answer.correct ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                            {answer.correct ? "Correct" : "Incorrect"}
                        </span>
                    </div>
                    <div className="text-sm text-gray-700 whitespace-pre-wrap">
                        {JSON.stringify(answer.options)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultPage;