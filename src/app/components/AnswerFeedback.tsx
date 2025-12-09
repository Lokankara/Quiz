import { AnswerDto } from "../types";

export interface AnswerFeedbackProps {
  answerResult?: AnswerDto;
 question?: string;
}

export default function AnswerFeedback({
  answerResult,
  question = "",
}: AnswerFeedbackProps) {
  if (!answerResult) return null;

  const options = answerResult.options || [];

  return (
    <>
      <div className="p-4 max-w-2xl mx-auto bg-white rounded-xl shadow-lg relative">
        <div
          className={`top-4 max-w-md right-4 p-4 rounded mb-4 border ${answerResult.correct ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
            }`}
        >
          <h5 className={`font-bold ${answerResult.correct ? "text-green-700" : "text-red-700"}`}>
            {answerResult.correct ? "✓ " : "✗ "}
            {question}
          </h5>
        </div>
        <div className="space-y-3">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`p-2 pl-4 border-l-4 ${opt.correct ? "border-green-500" : "border-red-500"
                } rounded-md ${i % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <h4 className={`text-lg ${opt.correct ? "text-green-700 font-semibold" : "text-red-700"}`}>
                {opt.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
