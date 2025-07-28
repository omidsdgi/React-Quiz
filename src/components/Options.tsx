import {OptionsProps} from "../type/QuizTypes";

export  function Options({
                             question,
                             answer,
                             dispatch
                         }:OptionsProps) {

    const hasAnswered= answer !==null;
    return (
        <div className="options">
            {question.options.map((option:string,index:number) =>
                (<button
                        className={`btn btn-option ${index === answer ? "answer" :""} ${
                            hasAnswered
                                ? index===question.correctOption
                                    ? "correct"
                                    : "wrong"
                                    :""
                        }`}
                        key={option}
                        disabled={hasAnswered}
                        onClick={()=>dispatch({type:"newAnswer",payload:index})}
                    >
                        {option}
                    </button>
                ))}
        </div>
    );
}