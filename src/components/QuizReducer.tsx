import { QuizState,Question,} from "../type/QuizTypes";

export type Action =
    | { type: "dataReceived"; payload: Question[] }
    | { type: "dataFailed" }
    | { type: "start" }
    | { type: "newAnswer"; payload: number }
    | { type: "nextQuestion" }
    | { type: "finish" }
    | { type: "restart" }
    | { type: "tick" };

export const SEC_PER_QUESTION=30
export const initialState :QuizState= {
    questions:[],
    status:"loading",
    index:0,
    answer:null,
    points:0,
    highScore:0,
    secondsRemaining:null
}

export function QuizReducer(state:QuizState,action:Action):QuizState {
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
                status:"active",
                secondsRemaining: state.questions.length* SEC_PER_QUESTION
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
        case "tick":
            return {
                ...state,
                secondsRemaining:(state.secondsRemaining  && state.secondsRemaining- 1) ,
                status:state.secondsRemaining === 0 ? "finished" : state.status,

            }
        default:
            throw new Error("Unknown action type");
    }

}