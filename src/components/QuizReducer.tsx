import { QuizState,Question,} from "../type/QuizTypes";

export type DataReceived ={
    type: "dataReceived";
    payload: Question[];
}

export type DataFailed ={
    type: "dataFailed";
}
export type Start={
    type: "start",
}

export type NewAnswer = {
    type: "newAnswer",
    payload: number;
}
export type Finish = {
    type: "finish",
}
export type NextQuestion = {
    type: "nextQuestion",
}
export type Restart = {
    type: "restart",
}
export type QuizAction= DataReceived | DataFailed | Start | NewAnswer | NextQuestion | Finish | Restart;

export const initialState :QuizState= {
    questions:[],
    status:"loading",
    index:0,
    answer:null,
    points:0,
    highScore:0,
}

export function QuizReducer(state:QuizState,action:QuizAction):QuizState {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status:"ready"
            }
        case "dataFailed":
            return {
                ...state,
                status:"error"
            }
        case "start":
            return {
                ...state,
                status:"active"
            }
        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer:action.payload,
                points:action.payload === question?.correctOption
                    ? state.points +question.points
                    :state.points,
            }
            case "nextQuestion":
                return {
                    ...state,
                    index:state.index + 1,
                }

        case "finish":
            return {
                ...state,
                status:"finished",
                highScore:state.points> state.highScore ?  state.points : state.highScore,
                answer:null
            }
        case "restart":
            return {
                ...initialState,
                questions:state.questions,
            status:"ready"
            }
        default:
            throw new Error("Unknown action type");
    }

}