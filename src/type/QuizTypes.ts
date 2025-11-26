import React from "react";

export interface Question {
    id: string | number;
    question: string;
    options: string[];
    correctOption: number;
    points: number;
    explanation: string;
}

export interface ExplanationModalProps {
    isOpen: boolean;
    isCorrect: boolean;
    explanation: string;
    onClose: () => void;
}

export type QuizStatus= "loading" | "error" | "ready" | "active" | "finished"

export interface QuizState {
    questions: Question[];
    status: "loading" | "error" | "ready" | "active" | "finished";
    index: number;
    answer: number | null;
    points: number;
    highScore: number;
    secondsRemaining: number | null;
    selectedLevel: "fundamental" | "intermediate" | "advanced" | null;
    availableQuestions: {
        fundamental: Question[];
        intermediate: Question[];
        advanced: Question[];
    };
}

export interface StartScreenProps {
    numQuestions: number;
    dispatch: React.Dispatch<Action>;
    state: QuizState;
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
    onShowExplanation?: (isCorrect: boolean) => void;
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

export type Action =
    | { type: "dataReceived"; payload: Question[] }
    | { type: "dataFailed" }
    | { type: "start" }
    | { type: "newAnswer"; payload: number }
    | { type: "nextQuestion" }
    | { type: "finish" }
    | { type: "restart" }
    | { type: "tick" }
    | { type: "selectLevel"; payload: "fundamental" | "intermediate" | "advanced" }
    | { type: "selectRange"; payload: { level: "fundamental" | "intermediate" | "advanced"; startIndex: number; endIndex: number } }
    | { type: "selectLevelWithCount"; payload: { level: "fundamental" | "intermediate" | "advanced"; count: number; startFrom?: number } };