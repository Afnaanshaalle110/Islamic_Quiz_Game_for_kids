import React, {useState, useContext} from 'react'
import { Questions } from '../Pages/QuestionH';
import { QuizContext } from '../Pages/Contexts';

const Quiz = () =>{
    const [score, setscore] = useContext(QuizContext); 
    const [CurrQuestion, setCurrQuestion] = useState(0); 
    const [optionchosen, setoptionchosen] = useState("");
          // #netQuestion function
    const next = () => {
        if (Questions[CurrQuestion].Answer == optionchosen){
            setscore()
        }
    };
    return (
        <div className='Quiz'>
            <h1>{Questions[CurrQuestion] .prompt}</h1>

            <div className='opitions'>
                <button onClick={() => setoptionchosen("A")}> {Questions[CurrQuestion] .opA}</button>
                <button onClick={() => setoptionchosen("B")}> {Questions[CurrQuestion] .opB}</button>
                <button onClick={() => setoptionchosen("C")}> {Questions[CurrQuestion] .opC}</button>
                <button onClick={() => setoptionchosen("D")}> {Questions[CurrQuestion] .opD}</button>
            
            </div>
            <button>Next</button>
        </div>
        
    )
}

export default Quiz
