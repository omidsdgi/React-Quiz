import React from "react";
import {Action} from "@/components";

export type Question ={
    id: number;
    question: string;
    options: string[];
    correctOption: number;
    points:number
}

export type QuizStatus= "loading" | "error" | "ready" | "active" | "finished"

export type QuizState ={
    questions: Question[];
    status: QuizStatus;
    index: number;
    answer: number |null;
    points:number;
    highScore:number;
    secondsRemaining:number | null;
}
export interface StartScreenProps {
    numQuestions: number;
    dispatch: React.Dispatch<Action>;
}

export interface QuestionnaireProps {
    question: Question;
    answer: number | null;
    points: number;
    dispatch: React.Dispatch<Action>;
}

export interface OptionsProps {
    question: Question;
    answer: number | null;
    points: number;
    dispatch: React.Dispatch<Action>;
}

export interface NextButtonProps {
    dispatch: React.Dispatch<Action>;
    answer: number | null;
    index: number;
    numQuestions: number;
}

export interface TimerProps {
    dispatch: React.Dispatch<Action>;
    secondsRemaining: number |null;
}

export interface ProgressProps {
    index: number;
    numQuestions: number;
    points: number;
    maxPossiblePoints: number;
    answer: number | null;
}

export interface FinishScreenProps {
    points: number;
    maxPossiblePoints: number;
    highScore:number;
    dispatch: React.Dispatch<Action>;
}

