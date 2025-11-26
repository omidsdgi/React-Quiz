import {QuestionnaireProps} from "../type/QuizTypes";
import {Options} from "./Options";

export function Questionnaire({
                                  question,
                                  answer,
                                  points,
                                  dispatch,
                              }:QuestionnaireProps) {
    return (
        <div>
            <h4> {question.question} </h4>
            <Options
                question={question}
                answer={answer}
                dispatch={dispatch}
                points={points}
            />
        </div>
    );
}