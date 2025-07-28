import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

interface NextButtonProps {
    dispatch:Dispatch<QuizAction>;
    answer:number|null;
    index:number;
    numQuestions:number;
}
export  function NextButton({dispatch,answer, index , numQuestions}:NextButtonProps) {
    if (answer === null)return null;
    if (index <numQuestions - 1)
    return (
        <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>
Next
        </button>
    );
    if (index === numQuestions - 1 )
        return (
            <button className="btn btn-ui" onClick={()=>dispatch({type:"finish"})}>
                Finish
            </button>
        );
}