import { Set } from "typescript";

export interface QuestionProps {
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
    question: string;
    correct: boolean;
    explanation: string;
    options: OptionDto[];
}

export interface ResultDto {
    total: number;
    correct: number;
    incorrect: number;
    answeredIds: Set<number>;
}

export interface OptionView {
    correct: boolean;
    text: string;
}

export type AnswerResult = {
    correct: boolean
    explanation: string
    options?: OptionView[]
    correctOptions?: string[]
    selectedOptions?: string[]
}
