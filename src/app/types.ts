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
