import {Question} from "../type/QuizTypes";
import {Options} from "./Options";
import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

interface QuestionnaireType{
    question:Question;
    answer:number|null;
    dispatch:Dispatch<QuizAction>;
}
export function Questionnaire({question,answer, dispatch}:QuestionnaireType) {
    return (
        <div>
 <h4> {question.question} </h4>
 <Options question={question}  answer={answer} dispatch={dispatch} />

        </div>
    );
}