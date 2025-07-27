import {Error, Header, initialState, Loader, NextButton, Questionnaire, QuizReducer, StartScreen} from "@/components";
import {useEffect, useReducer} from "react";
import {Main} from "@/components";
import {Question} from "@/type/QuizTypes";

export default function Home() {
    const [{questions,status,index,answer,points},dispatch]=useReducer(QuizReducer,initialState);

    const numQuestions=questions.length;

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
                {status === "ready" && <StartScreen
                    numQuestions={numQuestions}
                    dispatch={dispatch}/>}
                {status === "active" && <Questionnaire
                    question={questions[index]}
                    answer={answer}
                    dispatch={dispatch}
                />}
                <NextButton dispatch={dispatch} answer={answer} />
            </Main>
        </div>
    );
}
