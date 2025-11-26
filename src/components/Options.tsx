import {OptionsProps} from "../type/QuizTypes";

export  function Options({
                             question,
                             answer,
                             dispatch,
                             onShowExplanation
                         }:OptionsProps) {

    const hasAnswered = answer !== null;

    const handleClick = (index: number) => {
        dispatch({ type: "newAnswer", payload: index });

        const isCorrect = index === question.correctOption;
        onShowExplanation?.(isCorrect);
    };
    return (
        <div className="options">
            {question.options.map((option: string, index: number) => (
                <button
                    className={`btn btn-option ${index === answer ? "answer" : ""} ${
                        hasAnswered
                            ? index === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""
                    }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => handleClick(index)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}