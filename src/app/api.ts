import axios from "axios";
import { FlashCardDto, AnswerDto, ResultDto } from "./types";

export const getAllQuestions = async (): Promise<FlashCardDto[]> => {
    const res = await axios.get<FlashCardDto[]>("/api/questions");
    return res.data;
};

export const getRandomQuestion = async (): Promise<FlashCardDto> => {
    const res = await axios.get<FlashCardDto>("/api/questions/random");
    return res.data;
};

export const getAvailableQuestions = async (): Promise<FlashCardDto[]> => {
    const res = await axios.get<FlashCardDto[]>("/api/questions/available");
    return res.data;
};

export const getAvailableCount = async (): Promise<number> => {
    const res = await axios.get<number>("/api/questions/available/count");
    return res.data;
};

export const submitAnswer = async (id: number, options: string[]): Promise<AnswerDto> => {
    const params = new URLSearchParams();
    params.append("id", id.toString());
    options.forEach(opt => {
        params.append("options", opt);
    });
    const res = await axios.post<AnswerDto>("/api/questions/answers", null, { params });
    return res.data;
};

export const getAnswers = async (): Promise<AnswerDto[]> => {
    const res = await axios.get<AnswerDto[]>("/api/questions/answers");
    return res.data;
};

export const getResult = async (): Promise<ResultDto> => {
    const res = await axios.get<ResultDto>("/api/questions/result");
    return res.data;
};

export const removeQuestion = async (id: number): Promise<FlashCardDto> => {
    const res = await axios.delete<FlashCardDto>("/api/questions", {
        params: { id },
    });
    return res.data;
};

export const handleRestart = async () => {
    try {
        await axios.post("/api/questions/restart");
        window.location.href = "/";
    } catch (err) {
        console.error(err);
    }
};
