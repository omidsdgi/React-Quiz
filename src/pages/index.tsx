import {Error, Header, initialState, initialValue, Loader, Question, QuizReducer} from "@/components";
import {useEffect, useReducer} from "react";
import {Main} from "@/components";
import StartScreen from "@/components/StartScreen";

export default function Home() {
    const [{questions,status},dispatch]=useReducer(QuizReducer,initialState);

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
        <div>
            <Header/>
            <Main>
                {status === "loading" && <Loader/>}
                {status === "error" && <Error/>}
                {status === "ready" && <StartScreen numQuestions={numQuestions}/>}
            </Main>
        </div>
    );
}
