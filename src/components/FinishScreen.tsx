import {Dispatch} from "react";
import {QuizAction} from "./QuizReducer";

interface FinishScreenType {
    points: number,
    maxPossiblePoints: number
    highScore:number
    dispatch:Dispatch<QuizAction>
}
export function FinishScreen({points, maxPossiblePoints,highScore,dispatch}:FinishScreenType) {
    const percentage= (points/maxPossiblePoints) * 100
    let emoji
    if(percentage === 100) emoji= "🥇"
    if(percentage >= 80 && percentage<100) emoji= "🎉"
    if(percentage >= 50 && percentage<80) emoji= "🙃"
    if(percentage >= 0 && percentage<50) emoji= "😯"
    if(percentage === 0 ) emoji= "🤦‍♂️"

    return (
        <>
        <p className="result">
<span>{emoji}</span>You score {points} out of {maxPossiblePoints} ({Math.ceil(percentage) }%)
        </p>
        <p className="highscore">
            (High Score : {highScore} points)
        </p>
            <button className="btn btn-ui" onClick={()=>dispatch({type:"restart"})}>Restart Quiz</button>
        </>
    );
}