import { QuizState,Question,} from "../type/QuizTypes";

export type DataReceived ={
    type: "dataReceived";
    payload: Question[];
}

export type DataFailed ={
    type: "dataFailed";
}
export type QuizAction= DataReceived | DataFailed;

export const initialState :QuizState= {
    questions:[],
    status:"loading"
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
        default:
            throw new Error("Unknown action type");
    }

}