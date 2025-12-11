import { useState } from "react";
import { QuestionProps } from "../types";

export default function Question({ size, card, onSubmit }: QuestionProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleSelect = (answer: string) => {
        if (card.multiSelect) {
            setSelectedOptions(prev => {
                let updated;
                if (prev.includes(answer)) {
                    updated = prev.filter(o => o !== answer);
                } else {
                    updated = [...prev, answer];
                }
                
                if (updated.length >= 2) {
                    onSubmit(updated);
                }
                
                return updated;
            });
        } else {
            const updated = [answer];
            setSelectedOptions(updated);
            onSubmit(updated);
        }
    };

    const isSelected = (answer: string) =>
        selectedOptions.includes(answer);

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <div className="text-xl font-semibold text-gray-800">
                #{66 - size}. {card.question}
            </div>

            <div className="space-y-3">
                {card.options.map((answer, idx) => {
                    const selected = isSelected(answer);
                    return (
                        <label
                            key={`answer-${card.id}-${idx}`}
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
                                onChange={() => handleSelect(answer)}
                                className="w-6 h-6 accent-blue-600 flex-shrink-0 mt-0.5"
                            />
                            <span className="font-medium">
                                {answer}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

