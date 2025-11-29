import React, { useState } from "react";
import { FlashCardDto, OptionDto } from "../types";

interface QuestionProps {
    card: FlashCardDto;
    onSubmit: (selectedOptions: string[]) => void;
}

export default function Question({ card, onSubmit }: QuestionProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleSelect = (option: OptionDto) => {
        const optionStr = JSON.stringify(option);
        setSelectedOptions(prev =>
            prev.includes(optionStr)
                ? prev.filter(o => o !== optionStr)
                : [...prev, optionStr]
        );
    };

    const handleSubmit = () => {
        if (selectedOptions.length > 0) {
            onSubmit(selectedOptions);
        }
    };

    const isSelected = (option: OptionDto) => selectedOptions.includes(JSON.stringify(option));

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <div className="text-xl font-semibold text-gray-800">{card.question}</div>
            <div className="space-y-3">
                {card.options.map((option, idx) => (
                    <button
                        key={`option-${card.id}-${idx}`}
                        type="button"
                        onClick={() => handleSelect(option)}
                        className={`
                            w-full text-left py-3 px-4 rounded-lg border-2 transition duration-150 ease-in-out
                            ${isSelected(option)
                                ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                                : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-blue-400'
                            }
                        `}
                    >
                        <span className="font-medium">{JSON.stringify(option)}</span>
                    </button>
                ))}
            </div>
            <button
                type="button"
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                className={`
                    w-full py-3 mt-4 text-white font-bold rounded-lg transition duration-150 ease-in-out
                    ${selectedOptions.length > 0
                        ? 'bg-green-500 hover:bg-green-600 shadow-md'
                        : 'bg-gray-400 cursor-not-allowed'
                    }
                `}
            >
                Submit
            </button>
        </div>
    );
}
