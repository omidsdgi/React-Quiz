import {ProgressProps} from "../type/QuizTypes";

export  function Progress({
                              numQuestions,
                              index,
                              points,
                              maxPossiblePoints,
                              answer
                          }:ProgressProps) {
    return (
        <header className="progress">
            <progress
                max={numQuestions}
                value={index + Number(answer !==null)}
            />
            <p>
                Question <strong>{index +1} / </strong>{numQuestions}
            </p>
            <p>
                <strong>{points} / </strong> {maxPossiblePoints}
            </p>
        </header>
    );
}