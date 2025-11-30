import { useEffect, useState } from "react";

export const RestartPage = ({ onClose, onRestart }: { onClose: () => void; onRestart: (fileIndex: number) => void }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
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
                <div className="grid grid-cols-1 gap-3 mb-6">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <button
                            key={index}
                            onClick={() => onRestart(index)}
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-white"
                        >
                            Quiz Set {index}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
