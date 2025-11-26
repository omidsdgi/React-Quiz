import {
    Error, FinishScreen,
    Header,
    initialState,
    Loader,
    NextButton,
    Progress,
    Questionnaire,
    QuizReducer,
    StartScreen
} from "@/components";
import {useCallback, useMemo, useReducer, useState} from "react";
import {Main} from "@/components";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";
import {ExplanationModal} from "@/components/ExplanationModal";

export default function Home() {
    const [state, dispatch] = useReducer(QuizReducer, initialState);

    const [modalState, setModalState] = useState({
        isOpen: false,
        isCorrect: false,
        explanation: ""
    });
    const {questions, status, index, answer, points, highScore, secondsRemaining} = state;

    const numQuestions=useMemo(()=>
        questions.length, [questions.length]
    );

    const maxPossiblePoints=useMemo(()=>
        questions.reduce((prev,cur)=>prev +cur.points,0), [questions]
    )

    const handleShowExplanation = useCallback(() => {
        const currentQuestion = questions[index];
        const isCorrect = answer === currentQuestion.correctOption;
        setModalState({
            isOpen: true,
            isCorrect,
            explanation: currentQuestion.explanation
        });
    },[questions,index,answer]);

    const handleCloseModal = useCallback(() => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    },[]);
    console.log("STATUS:", status, state);

    return (
        <div className="app">
            <Header/>
            <Main>
                {status === "loading" && <Loader/>}
                {status === "error" && <Error/>}
                {status === "ready" &&
                    <StartScreen
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                        state={state}
                    />}
                {status === "active" && (
                    <>
                        <Progress
                            numQuestions={numQuestions}
                            index={index}
                            points={points}
                            maxPossiblePoints={maxPossiblePoints}
                            answer={answer}
                        />
                        <Questionnaire
                            question={questions[index]}
                            answer={answer}
                            dispatch={dispatch}
                            points={points}
                        />
                        <Footer>
                            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch}/>
                            {answer !== null && (
                                <button
                                    onClick={handleShowExplanation}
                                    className="btn btn-ui"
                                    style={{
                                        backgroundColor: 'var(--color-medium)',
                                        marginLeft: '1rem'
                                    }}
                                >
                                    نمایش توضیحات
                                </button>
                            )}
                            <NextButton
                                dispatch={dispatch}
                                answer={answer}
                                index={index}
                                numQuestions={numQuestions}
                            />
                        </Footer>
                        <ExplanationModal
                            isOpen={modalState.isOpen}
                            isCorrect={modalState.isCorrect}
                            explanation={modalState.explanation}
                            onClose={handleCloseModal}
                        />
                    </>
                )}
                {status === "finished" &&
                    <FinishScreen
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        highScore={highScore}
                        dispatch={dispatch}
                    />}
            </Main>
        </div>
    );
}
