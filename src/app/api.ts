import axios from "axios";
import { FlashCardDto, AnswerDto, ResultDto } from "./types";

const API_BASE = process.env.REACT_APP_API_URL ?? "https://quiz-6o4v.onrender.com";
export const api = axios.create({ baseURL: API_BASE });

export const getAllQuestions = async (): Promise<FlashCardDto[]> => {
    const res = await api.get<FlashCardDto[]>("/api/questions");
    return res.data;
};

export const getRandomQuestion = async (): Promise<FlashCardDto> => {
    const res = await api.get<FlashCardDto>("/api/questions/random");
    return res.data;
};

export const getAvailableQuestions = async (): Promise<FlashCardDto[]> => {
    const res = await api.get<FlashCardDto[]>("/api/questions/available");
    return res.data;
};

export const getAvailableCount = async (): Promise<number> => {
    const res = await api.get<number>("/api/questions/available/count");
    return res.data;
};

export const submitAnswer = async (id: number, answers: string[]): Promise<AnswerDto> => {
    const params = new URLSearchParams();
    params.append("id", id.toString());
    answers.forEach(answers => params.append("options", answers));
    const res = await api.post<AnswerDto>("/api/questions/answers", null, { params });
    return res.data;
};

export const getAnswers = async (): Promise<AnswerDto[]> => {
    const res = await api.get<AnswerDto[]>("/api/questions/answers");
    return res.data;
};

export const getResult = async (): Promise<ResultDto> => {
    const res = await api.get<ResultDto>("/api/questions/result");
    return res.data;
};

export const removeQuestion = async (id: number): Promise<FlashCardDto> => {
    const res = await api.delete<FlashCardDto>("/api/questions", {
        params: { id },
    });
    return res.data;
};

export const handleRestart = async (fileIndex: number) => {
    await api.post(`/api/questions/restart?fileIndex=${fileIndex}`);
    window.location.href = "/";
};
