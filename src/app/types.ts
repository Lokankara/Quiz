export interface OptionDto {
    text: string;
    correct: boolean;
}

export interface FlashCardDto {
    id: number;
    question: string;
    options: OptionDto[];
    explanation: string;
}

export interface AnswerDto {
    correct: boolean;
    card: FlashCardDto;
    explanation: string;
}

export interface ResultDto {
    total: number;
    correct: number;
    incorrect: number;
    answeredIds: Set<number>;
}
