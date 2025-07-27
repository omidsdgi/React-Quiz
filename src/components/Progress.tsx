interface ProgressType {
    numQuestions: number;
    index:number
    points:number
    maxPossiblePoints:number
    answer:number |null
}
export  function Progress({
                              numQuestions,
                              index,
                              points,
                              maxPossiblePoints,
                              answer
                          }:ProgressType) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !==null)}></progress>
            <p>Question <strong>{index +1} / </strong>{numQuestions}</p>
            <p><strong>{points} / </strong> {maxPossiblePoints} </p>
        </header>
    );
}