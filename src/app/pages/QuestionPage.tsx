import { useEffect, useState } from "react";
import { FlashCardDto } from "../types";
import { getRandomQuestion, submitAnswer as sendAnswer } from "../api";

export default function QuizPage() {
    const [question, setQuestion] = useState<FlashCardDto | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const loadQuestion = async () => {
        setLoading(true);
        try {
            const q = await getRandomQuestion();
            setQuestion(q);
            setSelectedOptions([]);
        } catch (error) {
            console.error("Failed to load question:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadQuestion();
    }, []);
    
    const handleSelect = (optionStr: string) => {
        if (!question) return;
        if (question.multiSelect) {
            setSelectedOptions(prev =>
                prev.includes(optionStr) ? prev.filter(o => o !== optionStr) : [...prev, optionStr]
            );
        } else {
            setSelectedOptions([optionStr]);
        }
    };

    const handleSubmit = async () => {
        if (!question || selectedOptions.length === 0) return;
        const res = await sendAnswer(question.id, selectedOptions);
        alert(res.correct ? "Correct" : "Incorrect");
        await loadQuestion();
    };

    if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
    if (!question) return <div className="text-center mt-20">No questions available</div>;

    return (
        <div className="max-w-xl mx-auto p-6 border rounded shadow">
            <h2 className="font-bold mb-4">{question.question}</h2>
            <ul className="space-y-2">
                {question.options.map(o => {
                    const str = JSON.stringify(o);
                    const checked = selectedOptions.includes(str);
                    return (
                        <li key={o.text}>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type={question.multiSelect ? "checkbox" : "radio"}
                                    checked={checked}
                                    onChange={() => handleSelect(str)}
                                />
                                <span>{o.text}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
                Submit
            </button>
        </div>
    );
}
