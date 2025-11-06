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
import {useEffect, useReducer, useState} from "react";
import {Main} from "@/components";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";
import {mockQuestions} from "@/mock/mockQuestions";
import {ExplanationModal} from "@/components/ExplanationModal";

export default function Home() {
    const [state, dispatch] = useReducer(QuizReducer, initialState);

    const [modalState, setModalState] = useState({
        isOpen: false,
        isCorrect: false,
        explanation: ""
    });
    const {questions, status, index, answer, points, highScore, secondsRemaining} = state;

    const numQuestions=questions.length;
    const maxPossiblePoints=questions.reduce((prev,cur)=>prev +cur.points,0)
    useEffect(()=>{
        dispatch({type:"dataReceived",payload:mockQuestions});
    },[])

    const handleShowExplanation = (isCorrect: boolean) => {
        const currentQuestion = questions[index];
        setModalState({
            isOpen: true,
            isCorrect,
            explanation: currentQuestion.explanation
        });
    };

    const handleCloseModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

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
                            onShowExplanation={handleShowExplanation}
                        />
                        <Footer>
                            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch}/>
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
