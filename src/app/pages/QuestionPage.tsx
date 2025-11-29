import { useEffect, useState } from "react";
import axios from "axios";
import { FlashCardDto, AnswerDto } from "../types";

export default function QuestionPage() {
    const [question, setQuestion] = useState<FlashCardDto | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchRandomQuestion = async () => {
        setLoading(true);
        try {
            const res = await axios.get<FlashCardDto>("/api/questions/random");
            setQuestion(res.data);
            setSelectedIndex(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    const submitAnswer = async () => {
        if (question && selectedIndex !== null) {
            const selectedOptionText = [question.options[selectedIndex].text];
            const res = await axios.post<AnswerDto>("/api/questions/answers", null, {
                params: { id: question.id, options: selectedOptionText },
            });
            await fetchRandomQuestion();
            alert(res.data.correct ? "Correct!" : "Incorrect!");
        }
    };

    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (!question) return <div className="text-center mt-20">No questions available</div>;

    return (
        <div className="max-w-xl mx-auto p-6 border rounded shadow">
            <h2 className="font-bold mb-4">{question.question}</h2>
            <ul className="space-y-2">
                {question.options.map((opt, idx) => (
                    <li key={opt.text}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="option"
                                checked={selectedIndex === idx}
                                onChange={() => setSelectedIndex(idx)}
                                className="form-radio"
                            />
                            <span>{opt.text}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <button
                onClick={submitAnswer}
                disabled={selectedIndex === null}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                Submit
            </button>
        </div>
    );
}
