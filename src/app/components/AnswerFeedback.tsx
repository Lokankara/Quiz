import { OptionView, AnswerFeedbackProps } from "../types"

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function extractQuoted(src: string): string[] {
  const res: string[] = []
  const re = /"([^"]+)"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(src))) {
    if (m[1]) res.push(m[1].trim())
  }
  return res
}

function extractCorrectOptions(explanation: string): Set<string> {
  const correctSet = new Set<string>()

  const multiPattern = /"([^"]+)"\s+and\s+"([^"]+)"\s+are\s+correct/gi
  let multiMatch: RegExpExecArray | null
  while ((multiMatch = multiPattern.exec(explanation))) {
    if (multiMatch[1]) correctSet.add(multiMatch[1].trim())
    if (multiMatch[2]) correctSet.add(multiMatch[2].trim())
  }

  const singlePattern = /"([^"]+)"\s+is\s+correct/gi
  let singleMatch: RegExpExecArray | null
  while ((singleMatch = singlePattern.exec(explanation))) {
    if (singleMatch[1]) correctSet.add(singleMatch[1].trim())
  }

  return correctSet
}

function findExplanationForOption(explanation: string, optionText: string): string {
  if (!optionText) return ""

  const quotedOptionPattern = new RegExp(`"\\s*${escapeRegExp(optionText)}\\s*"\\s+is\\s+(?:correct|incorrect)(?:[;,.])?\\s*([^"]*?)(?=\\s*"|$)`, "i")
  const match = quotedOptionPattern.exec(explanation)

  if (match && match[1]) {
    return match[1].trim().replace(/^[;,.\s]+/, "").replace(/[.;]$/, "")
  }
  return ""
}

function buildOptionsFromExplanation(explanation: string): OptionView[] {
  const clean = explanation || ""
  const quoted = extractQuoted(clean)
  const correctSet = extractCorrectOptions(clean)

  if (quoted.length === 0) return []

  return quoted.map(q => {
    return {
      text: q,
      correct: correctSet.has(q),
      explanation: findExplanationForOption(clean, q)
    }
  })
}

export default function AnswerFeedback({
  answerResult,
  title = "",
  explanationTitle = "",
}: AnswerFeedbackProps) {
  if (!answerResult) return null

  const explanationRaw = answerResult.explanation || ""
  const optionsFromResult = answerResult.options && answerResult.options.length > 0
    ? answerResult.options.map(o => ({ text: o.text, correct: !!o.correct, explanation: o.explanation || "" }))
    : undefined

  const options = optionsFromResult && optionsFromResult.length > 0
    ? optionsFromResult.map(o => {
      if (!o.explanation || o.explanation.trim() === "") {
        return { ...o, explanation: findExplanationForOption(explanationRaw, o.text) }
      }
      return o
    })
    : buildOptionsFromExplanation(explanationRaw)

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
        <div
          className={`p-4 rounded mb-4 border ${answerResult.correct ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
            }`}
        >
          <h3 className={`font-bold text-lg ${answerResult.correct ? "text-green-700" : "text-red-700"}`}>
            {answerResult.correct ? "✓ Correct" : "✗ Incorrect"}
          </h3>
        </div>
        <div className="space-y-3">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`p-2 pl-4 border-l-4 ${opt.correct ? "border-green-500" : "border-red-500"
                } rounded-md ${i % 2 === 1 ? "bg-gray-100" : "bg-white"}`}
            >
              <h4 className={`text-lg ${opt.correct ? "text-green-700 font-semibold" : "text-red-700"}`}>
                {opt.text}
              </h4>
              {opt.explanation && <p className="text-gray-700">{opt.explanation}</p>}
            </div>

          ))}
        </div>
      </div>
    </>
  )
}
