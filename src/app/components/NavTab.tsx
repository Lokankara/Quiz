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

export default TabNav;