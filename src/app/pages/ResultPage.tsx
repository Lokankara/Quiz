import { useEffect, useState } from "react";
import { AnswerDto } from "../types";
import { getAnswers, handleRestart } from "../api";

const ResultPage = () => {
    const [answers, setAnswers] = useState<AnswerDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("results");

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

    handleRestart();

    const correctCount = answers.filter(a => a.correct).length;
    const totalCount = answers.length;
    const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const incorrectCount = totalCount - correctCount;

    if (loading) return <div className="p-4 text-center">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab("results")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "results"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        Results
                    </button>
                    <button
                        onClick={() => setActiveTab("statistics")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "statistics"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        Statistics
                    </button>
                    <button
                        onClick={() => setActiveTab("restart")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "restart"
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        Restart
                    </button>
                </nav>
            </div>

            {activeTab === "results" && (
                <div>
                    {answers.map((answer, idx) => (
                        <div key={answer.id || idx} className="mb-6 border rounded-lg p-4 shadow">
                            <div className="mb-2 flex justify-between items-center">
                                <p className="font-bold text-sm">Answer {idx + 1}</p>
                                <span className={`px-2 py-1 text-xs rounded ${answer.correct ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                                    {answer.correct ? "Correct" : "Incorrect"}
                                </span>
                            </div>
                            <div className="text-sm text-gray-700 whitespace-pre-wrap">
                                {answer.explanation}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "statistics" && (
                <section className="border rounded-lg bg-white shadow" aria-label="Exam results">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="text-sm text-gray-600 mb-1">
                                    <span className="mr-4">Exam results</span>
                                    <span>Attempted on <b>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</b></span>
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
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="#e5e7eb"
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="#3b82f6"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 36}`}
                                            strokeDashoffset={`${2 * Math.PI * 36 * (1 - scorePercentage / 100)}`}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-lg font-bold">{scorePercentage}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === "restart" && (
                <div className="text-center p-8 border rounded-lg bg-gray-50">
                    <h3 className="text-lg font-medium mb-4">Restart Quiz</h3>
                    <p className="mb-6 text-gray-600">This will clear all your answers and start a new quiz session.</p>
                    <button
                        onClick={handleRestart}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
                    >
                        Restart Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default ResultPage;