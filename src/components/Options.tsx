import {Question} from "../type/QuizTypes";
import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

interface OptionsType {
    question: Question;
    answer: number|null;
    dispatch:Dispatch<QuizAction>;
}

export  function Options({question,answer, dispatch}:OptionsType) {
    const hasAnswered= answer !==null;
    return (
        <div className="options">
            {question.options.map((option,index) =>
                (<button className={`btn btn-option ${index === answer ? "answer" :""} 
                    ${
                    hasAnswered
                        ? index===question.correctOption
                            ? "correct"
                            : "wrong" :
                        ""
                }`}
                         key={option}
                         disabled={hasAnswered}
                onClick={()=>dispatch({type:"newAnswer",payload:index})}
                >{option}</button>))}</div>
    );
}