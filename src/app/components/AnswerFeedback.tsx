type OptionView = {
  text: string
  correct?: boolean
  explanation?: string
}

type AnswerResult = {
  correct: boolean
  explanation: string
  options?: OptionView[]
  correctOptions?: string[]
  selectedOptions?: string[]
}

type AnswerFeedbackProps = {
  answerResult: AnswerResult | null
  title?: string
  explanationTitle?: string
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function splitSentences(raw: string): string[] {
  if (!raw) return []
  const parts = raw.match(/[^.?!;]+[.?!;]?/g) || []
  return parts.map(p => p.trim()).filter(Boolean)
}

function stripMarks(s?: string) {
  if (!s) return ""
  return s.replace(/-{3,}/g, " ").replace(/["“”‘’']/g, "").trim()
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

function buildOptionsFromExplanation(explanation: string): OptionView[] {
  const clean = explanation || ""
  const quoted = extractQuoted(clean)
  const sentences = splitSentences(clean)
  if (quoted.length > 0) {
    const correctSet = new Set<string>()
    const correctPhraseRe = /"([^"]+)"\s+(?:is|are)\s+correct/gi
    let m: RegExpExecArray | null
    while ((m = correctPhraseRe.exec(clean))) {
      if (m[1]) correctSet.add(m[1].trim())
    }
    return quoted.map(q => {
      const expl = findExplanationForOption(sentences, q)
      return { text: q, correct: correctSet.has(q), explanation: expl }
    })
  }
  const lines = clean
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)
  return lines.map(l => {
    const expl = findExplanationForOption(sentences, l)
    return { text: l, correct: false, explanation: expl }
  })
}

function findExplanationForOption(sentences: string[], optionText: string): string {
  if (!optionText) return ""
  const optEsc = escapeRegExp(optionText)
  const quotedRe = new RegExp(`"${optEsc}"`, "i")
  const plainRe = new RegExp(optEsc, "i")
  for (let i = 0; i < sentences.length; i++) {
    const s = sentences[i]
    if (quotedRe.test(s) || plainRe.test(s)) {
      if (s.indexOf(";") >= 0) {
        const parts = s.split(";")
        if (parts.length > 1) return parts.slice(1).join(";").trim().replace(/[.?!;]$/, "")
      }
      const lower = s.toLowerCase()
      if (/(is|are)\s+(correct|incorrect)/i.test(s)) {
        if (i + 1 < sentences.length) return sentences[i + 1].replace(/[.?!;]$/, "").trim()
        return ""
      }
      const after = s.replace(new RegExp(`^.*${optEsc}[:\\s-–—]*`, "i"), "").trim()
      if (after && after.length < 200 && after !== s) return after.replace(/[.?!;]$/, "").trim()
      if (i + 1 < sentences.length) {
        const next = sentences[i + 1].replace(/[.?!;]$/, "").trim()
        if (next && next.split(" ").length < 60) return next
      }
      return ""
    }
  }
  return ""
}

export default function AnswerFeedback({
  answerResult,
  title = "",
  explanationTitle = ""
}: AnswerFeedbackProps) {
  if (!answerResult) return null

  const explanationRaw = answerResult.explanation || ""
  const optionsFromResult =
    answerResult.options && answerResult.options.length > 0
      ? answerResult.options.map(o => ({ text: o.text, correct: !!o.correct, explanation: o.explanation || "" }))
      : undefined

  const options = optionsFromResult && optionsFromResult.length > 0
    ? optionsFromResult.map(o => {
        if (!o.explanation || o.explanation.trim() === "") {
          const sentences = splitSentences(explanationRaw)
          return { ...o, explanation: findExplanationForOption(sentences, o.text) }
        }
        return o
      })
    : buildOptionsFromExplanation(explanationRaw)

  const explanationLines = stripMarks(explanationRaw)
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)

  return (
    <>
      {title && <h2 className="font-bold mb-4">{title}</h2>}

      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
        <div
          className={`p-4 rounded mb-4 border ${
            answerResult.correct ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
          }`}
        >
          <h3 className={`font-bold text-lg ${answerResult.correct ? "text-green-700" : "text-red-700"}`}>
            {answerResult.correct ? "✓ Correct!" : "✗ Incorrect"}
          </h3>
        </div>

        <div className="space-y-3">
          {options.map((opt, i) => (
            <div key={i} className="bg-white p-3 rounded-md">
              <h4 className={`text-lg mb-1 ${opt.correct ? "text-green-700 font-semibold" : "text-red-700"}`}>
                {opt.text}
              </h4>
              {opt.explanation && <p className="text-gray-700">{opt.explanation}</p>}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded mb-0">
          {explanationTitle && <h4 className="font-semibold mb-2">{explanationTitle}</h4>}
          {explanationLines.map((line, i) => (
            <p key={i} className="text-gray-700">
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
