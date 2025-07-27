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
export type NextQuestion = {
    type: "nextQuestion",
}
export type QuizAction= DataReceived | DataFailed | Start | NewAnswer | NextQuestion;

export const initialState :QuizState= {
    questions:[],
    status:"loading",
    index:0,
    answer:null,
    points:0
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
                    answer:null
                }
        default:
            throw new Error("Unknown action type");
    }

}