import { useState } from "react";
import { OptionDto, QuestionProps } from "../types";

export default function Question({ size, card, onSubmit }: QuestionProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleSelect = (option: OptionDto) => {
        const optionStr = JSON.stringify(option);
        if (card.multiSelect) {
            setSelectedOptions(prev => {
                const updated = prev.includes(optionStr)
                    ? prev.filter(o => o !== optionStr)
                    : [...prev, optionStr];

                if (updated.length === 2) {
                    onSubmit(updated);
                }

                return updated;
            });
        } else {
            const updated = [optionStr];
            setSelectedOptions(updated);
            onSubmit(updated);
        }
    };

    const isSelected = (option: OptionDto) =>
        selectedOptions.includes(JSON.stringify(option));

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <div className="text-xl font-semibold text-gray-800">
                #{66 - size}. {card.question}
            </div>

            <div className="space-y-3">
                {card.options.map((option, idx) => {
                    const selected = isSelected(option);
                    return (
                        <label
                            key={`option-${card.id}-${idx}`}
                            className={`
                                flex items-center space-x-3 cursor-pointer w-full py-3 px-4 rounded-lg border-2 transition duration-150 ease-in-out
                                ${selected
                                    ? 'bg-sky-400 border-blue-700 text-white shadow-md'
                                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-blue-400'
                                }
                            `}
                        >
                            <input
                                type={card.multiSelect ? "checkbox" : "radio"}
                                checked={selected}
                                onChange={() => handleSelect(option)}
                                className="w-6 h-6 accent-blue-600 flex-shrink-0 mt-0.5"
                            />
                            <span className="font-medium">
                                {JSON.stringify(option).replaceAll('"', '')}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
