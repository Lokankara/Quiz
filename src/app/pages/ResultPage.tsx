import { useState, useEffect } from "react";
import { StatisticsPage } from "../pages/StatisticsPage";
import { getAnswers, handleRestart } from "../api";
import { AnswerDto } from "../types";
import { TabNav } from "../components/NavTab";
import { RestartPage } from "./RestartPage";

export const ResultPage = () => {
    const [answers, setAnswers] = useState<AnswerDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"results" | "restart" | "exam" | "statistics">("results");

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
            <div className="border-b border-gray-200 mb-6">
                <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {activeTab === "restart" && (
                <RestartPage onClose={() => setActiveTab("results")} onRestart={handleRestart} />
            )}

            {activeTab === "exam" && (
                <div className="text-center p-8 border rounded-lg bg-gray-50">
                    <h2 className="text-2xl font-bold mb-4">Are you ready?</h2>
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded"
                    >
                        Start Exam
                    </button>
                </div>
            )}

            {activeTab === "results" && (
                <div>
                    {answers.map((answer, idx) => (
                        <div key={answer.id ?? idx} className="mb-6 border rounded-lg p-4 shadow">
                            <div className="mb-2 flex justify-between items-center">
                                <p className="font-bold text-sm">#{idx + 1} {answer.question}</p>
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
                <StatisticsPage />
            )}
        </div>
    );
};
