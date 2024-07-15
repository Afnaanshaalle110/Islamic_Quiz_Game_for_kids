import React, {useState, useContext} from "react";
import {quizcontext} from "../Pages/Contexts"
import {Questions} from "../Pages/Questions"

function Quiz() {

         // changing score
    const {Score,setScore, setgameState} = useContext(quizcontext); 
    const [currentquestion, setcurrentquestion] = useState(0);
    const [optionchose, setoptionchose] = useState("");
    
    const handaleNextQ = () => {
        if (Questions[currentquestion].Answer == optionchose){
            setScore(Score + 1);
        // if (gameState) {
        //     setcurrentquestion(prevQuestion => prevQuestion + 1);
        //     setgameState(false);
        //   }
        }
        setcurrentquestion(currentquestion + 1);  // move nexquestion
    };

  
    const Finishquiz = () => {
        if (Questions[currentquestion].Answer == optionchose){
            setScore(Score + 1);
        }
        setgameState('endquiz');
    }

    return (
        <div className='quiz'>
            <h1>{Questions[currentquestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setoptionchose("A")}>
                    {Questions[currentquestion].opA}</button>
                <button onClick={() => setoptionchose("B")}>
                    {Questions[currentquestion].opB}</button>
                <button onClick={() => setoptionchose("C")}>
                    {Questions[currentquestion].opC}</button>
                <button onClick={() => setoptionchose("D")}>
                    {Questions[currentquestion].opD}</button>
            </div>
            {currentquestion == Questions.length -1 ? (
                <button onClick={Finishquiz}>Finish</button>
            ) : (
              <button onClick={handaleNextQ}> Next </button>
            )}
        </div>

        
    );
}
export default Quiz;
