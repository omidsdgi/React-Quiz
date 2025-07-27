
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
}

