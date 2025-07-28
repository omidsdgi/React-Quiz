import {useEffect} from "react";
import {TimerProps} from "../type/QuizTypes";

export default function Timer({
                                  secondsRemaining
                                  ,dispatch
                              }:TimerProps) {

    const minutes = Math.floor(secondsRemaining! / 60);
    const seconds = Math.floor(secondsRemaining! % 60);

    useEffect(()=>{

        const intervalId= setInterval( ()=>{
            dispatch({type:"tick"})
        },1000)
        return () => clearInterval(intervalId)
    },[dispatch])
    return (
        <div className="timer">
            {minutes < 10 && "0"}
            {minutes} :
            {seconds <10 && "0"}
            {seconds}
        </div>
    );
}