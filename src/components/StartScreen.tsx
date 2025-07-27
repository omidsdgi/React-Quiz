import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

type StartScreenType= {
    numQuestions?: number
    dispatch:Dispatch<QuizAction>,
}
export  function StartScreen({numQuestions,dispatch} :StartScreenType) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} question to test your React mastery</h3>
            <button className="btn btn-ui" onClick={()=> dispatch({type:"start"})}>Let&#39;s start</button>

            </div>
    );
}