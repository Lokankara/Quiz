export interface QuestionProps {
    index: number;
    size: number;
    card: FlashCardDto;
    onSubmit: (selectedOptions: string[]) => void;
}

export interface OptionDto {
    text: string;
    correct: boolean;
}

export interface FlashCardDto {
    id: number;
    question: string;
    multiSelect: boolean;
    options: OptionDto[];
    explanation: string;
}

export interface AnswerDto {
    id: number;
    correct: boolean;
    explanation: string;
}

export interface ResultDto {
    total: number;
    correct: number;
    incorrect: number;
    answeredIds: Set<number>;
}

export type OptionView = {
    text: string
    correct?: boolean
    explanation?: string
}

export type AnswerResult = {
    correct: boolean
    explanation: string
    options?: OptionView[]
    correctOptions?: string[]
    selectedOptions?: string[]
}

export type AnswerFeedbackProps = {
    answerResult: AnswerResult | null
    title?: string
    explanationTitle?: string
    onResetTime?: () => void
}
