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
import {useEffect, useReducer} from "react";
import {Main} from "@/components";
import {Question} from "@/type/QuizTypes";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";

export default function Home() {
    const [
        {questions, status, index, answer, points, highScore, secondsRemaining},
        dispatch]
        =useReducer(QuizReducer,initialState);

    const numQuestions=questions.length;
    const maxPossiblePoints=questions.reduce((prev,cur)=>prev +cur.points,0)
    useEffect(()=>{
        async function FetchQuestion(){
            try {
                const res=await fetch("http://localhost:9000/questions");
                const data:Question[]=await res.json();
                dispatch({type:"dataReceived",payload:data});
            }
            catch (err){
                dispatch({type:"dataFailed"});
            }
        }
        FetchQuestion()
    },[])
    return (
        <div className="app">
            <Header/>
            <Main>
                {status === "loading" && <Loader/>}
                {status === "error" && <Error/>}
                {status === "ready" &&
                    <StartScreen
                        numQuestions={numQuestions}
                        dispatch={dispatch}/>}
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
                            <NextButton
                                dispatch={dispatch}
                                answer={answer}
                                index={index}
                                numQuestions={numQuestions}
                            />
                        </Footer>
                    </>)}
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
