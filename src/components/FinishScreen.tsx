import {FinishScreenProps} from "../type/QuizTypes";

export function FinishScreen({points, maxPossiblePoints,highScore,dispatch}:FinishScreenProps ){
    const percentage= (points/maxPossiblePoints) * 100;
    let emoji: string;

    if (percentage === 100) emoji = "🥇";
    else if (percentage >= 80) emoji = "🎉";
    else if (percentage >= 50) emoji = "👍";
    else emoji = "🤔";

    return (
        <>
            <p className="result">
                <span>{emoji}</span>You score {points} out of{" "}
                {maxPossiblePoints} ({Math.ceil(percentage) }%)
            </p>
            <p className="highscore">
                (High Score : {highScore} points)
            </p>
            <button
                className="btn btn-ui"
                onClick={()=>dispatch({type:"restart"})}
            >
                Restart Quiz
            </button>
        </>
    );
}