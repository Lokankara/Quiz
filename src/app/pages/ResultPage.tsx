import { useEffect, useState } from "react";
import { AnswerDto } from "../types";
import { getAnswers } from "../api";
import axios from "axios";

const TabNav = ({ activeTab, onTabChange, onRestartClick }: { 
    activeTab: string; 
    onTabChange: (tab: string) => void;
    onRestartClick: () => void;
}) => (
    <nav className="-mb-px flex space-x-8">
        <button
            onClick={() => onTabChange("exam")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "exam"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
        >
            Exam
        </button>
        <button
            onClick={() => onTabChange("results")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "results"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
        >
            Results
        </button>
        <button
            onClick={() => onTabChange("statistics")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "statistics"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
        >
            Statistics
        </button>
        <button
            onClick={onRestartClick}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "restart"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
        >
            Restart
        </button>
    </nav>
);

const RestartModal = ({ onClose, onRestart }: { 
    onClose: () => void; 
    onRestart: (fileIndex: number) => void;
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ×
                </button>
                <h3 className="text-lg font-medium mb-4">Select Quiz Set</h3>
                <p className="text-gray-600 mb-6">Choose a quiz set to restart with:</p>
                <div className="grid grid-cols-1 gap-3 mb-6">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <button
                            key={index}
                            onClick={() => onRestart(index)}
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-red-400 hover:text-white"
                        >
                            Quiz Set {index}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ResultPage = () => {
    const [answers, setAnswers] = useState<AnswerDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("exam");
    const [showRestartModal, setShowRestartModal] = useState(false);

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

    const handleRestart = async (fileIndex: number) => {
        try {
            await axios.post(`/api/questions/restart?fileIndex=${fileIndex}`);
            window.location.href = "/";
        } catch (err) {
            console.error(err);
        }
    };

    const correctCount = answers.filter(a => a.correct).length;
    const totalCount = answers.length;
    const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const incorrectCount = totalCount - correctCount;

    if (loading) return <div className="p-4 text-center">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="border-b border-gray-200 mb-6">
                <TabNav 
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onRestartClick={() => setShowRestartModal(true)}
                />
            </div>

            {activeTab === "exam" && (
                <div className="text-center p-8 border rounded-lg bg-gray-50">
                    <h2 className="text-2xl font-bold mb-4">Ready for Exam?</h2>
                    <p className="text-gray-600 mb-6">Start a new exam session to test your knowledge.</p>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded"
                    >
                        Start New Exam
                    </button>
                </div>
            )}

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

            {showRestartModal && (
                <RestartModal 
                    onClose={() => setShowRestartModal(false)}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
};

export default ResultPage;