import React, {useState} from 'react'
import { Questions } from '../Pages/QuestionH';

const Quiz = () =>{
    const [CurrQuestion, setCurrQuestion] = useState(0); 
    const [optionchosen, setoptionchosen] = useState();
    return (
        <div className='Quiz'>
            <h1>{Questions[CurrQuestion] .prompt}</h1>

            <div className='opitions'>
                <button> {Questions[CurrQuestion] .opA}</button>
                <button> {Questions[CurrQuestion] .opB}</button>
                <button> {Questions[CurrQuestion] .opC}</button>
                <button> {Questions[CurrQuestion] .opD}</button>
            
            </div>
            <button>Next</button>
        </div>
        
    )
}

export default Quiz
