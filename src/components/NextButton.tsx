import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

interface NextButtonProps {
    dispatch:Dispatch<QuizAction>;
    answer:number|null;
}
export  function NextButton({dispatch,answer}:NextButtonProps) {
    if (answer === null)return null;
    return (
        <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>
Next
        </button>
    );
}