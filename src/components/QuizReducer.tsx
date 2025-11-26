import {QuizState, Question, Action,} from "../type/QuizTypes";
import {mockQuestions} from "../mock/mockQuestions";


export const SEC_PER_QUESTION=60

export const initialState :QuizState= {
    questions:[],
    status:"loading",
    index:0,
    answer:null,
    points:0,
    highScore:0,
    secondsRemaining:null,
    selectedLevel: null,
    availableQuestions: {
        fundamental:[],
        intermediate: [],
        advanced: []
    }
}

function getQuestionsByLevel(level: "fundamental" | "intermediate" | "advanced"): Question[] {
    const pointsMap = {
        fundamental: 10,
        intermediate: 20,
        advanced: 30
    };

    return mockQuestions.filter(q => q.points === pointsMap[level]);
}

function getQuestionsWithRange(
    level: "fundamental" | "intermediate" | "advanced",
    startIndex: number,
    count: number
): Question[] {
    const allLevelQuestions = getQuestionsByLevel(level);
    const endIndex = startIndex + count - 1;
    const actualEndIndex = Math.min(endIndex, allLevelQuestions.length);

    return allLevelQuestions.slice(startIndex - 1, actualEndIndex);
}

export function QuizReducer(state:QuizState,action:Action):QuizState {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
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
                    ? state.points +(question.points ||0)
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
                highScore: state.highScore,
                status:"ready"
            }
        case "tick":
            return {
                ...state,
                secondsRemaining:state.secondsRemaining  ? state.secondsRemaining- 1 : 0 ,
                status:state.secondsRemaining === 1 ? "finished" : state.status,
            }
        case "selectLevel":
            const allLevelQuestions = getQuestionsByLevel(action.payload);
            return {
                ...state,
                questions: allLevelQuestions,
                status: "ready",
                selectedLevel: action.payload,
                index: 0,
                answer: null,
                points: 0
            };

        case "selectRange":
            const { level, startIndex, endIndex } = action.payload;
            const levelQuestions = getQuestionsByLevel(level);
            const selectedQuestions = levelQuestions.slice(startIndex - 1, endIndex);


            return {
                ...state,
                questions: selectedQuestions,
                status: "ready",
                selectedLevel: level,
                index: 0,
                answer: null,
                points: 0
            };

        case "selectLevelWithCount":
            const { level: selectedLevel, count, startFrom = 1 } = action.payload;

            const selectedQuestionsWithCount = getQuestionsWithRange(
                selectedLevel,
                startFrom,
                count
            );

            return {
                ...state,
                questions: selectedQuestionsWithCount,
                status: "ready",
                selectedLevel: selectedLevel,
                index: 0,
                answer: null,
                points: 0
            };

        default:
            throw new Error("Unknown action type");
    }

}