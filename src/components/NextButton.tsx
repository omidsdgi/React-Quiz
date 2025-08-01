import {NextButtonProps} from "../type/QuizTypes";


export  function NextButton({
                                dispatch,
                                answer,
                                index ,
                                numQuestions
                            }:NextButtonProps) {
    if (answer === null) return null;

    if (index <numQuestions - 1)
        return (
            <button
                className="btn btn-ui"
                onClick={()=>dispatch({type:"nextQuestion"})}
            >
                Next
            </button>
        );
    if (index === numQuestions - 1 )
        return (
            <button
                className="btn btn-ui"
                onClick={()=>dispatch({type:"finish"})}>
                Finish Quiz
            </button>
        );
}