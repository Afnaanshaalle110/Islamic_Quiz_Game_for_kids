import React, { useState, useContext } from "react";
import { quizcontext } from "../Pages/Contexts";
import { Questions } from "../Pages/Questions";

function Quiz() {
    // Destructuring context values
    const { Score, setScore, setgameState } = useContext(quizcontext);
    const [currentquestion, setcurrentquestion] = useState(0);
    const [optionchose, setoptionchose] = useState("");
    const [error, setError] = useState("");

    // Function to handle next question
    const handleNextQ = () => {
        if (optionchose === "") {
            // Show error if no option is chosen
            setError("You must select an answer!");
        } else {
            // Update score if answer is correct
            if (Questions[currentquestion].Answer === optionchose) {
                setScore(Score + 1);
            }
            // Move to next question
            setcurrentquestion(currentquestion + 1);
            setoptionchose("");
            setError("");
        }
    };

    // Function to finish quiz
    const Finishquiz = () => {
        if (optionchose === "") {
            // Show error if no option is chosen
            setError("You must select an answer!");
        } else {
            // Update score if answer is correct
            if (Questions[currentquestion].Answer === optionchose) {
                setScore(Score + 1);
            }
            setgameState('endquiz');
        }
    };

    return (
        <div className='quiz'>
            <h1>{Questions[currentquestion].prompt}</h1>
            <div className='options'>
                <button className={optionchose === "A" ? "selected" : ""} onClick={() => setoptionchose("A")}>
                    {Questions[currentquestion].opA}
                </button>
                <button className={optionchose === "B" ? "selected" : ""} onClick={() => setoptionchose("B")}>
                    {Questions[currentquestion].opB}
                </button>
                <button className={optionchose === "C" ? "selected" : ""} onClick={() => setoptionchose("C")}>
                    {Questions[currentquestion].opC}
                </button>
                <button className={optionchose === "D" ? "selected" : ""} onClick={() => setoptionchose("D")}>
                    {Questions[currentquestion].opD}
                </button>
            </div>
            {/* Display error message if any */}
            {error && <p className="error">{error}</p>}
            {currentquestion === Questions.length - 1 ? (
                <button onClick={Finishquiz}>Finish</button>
            ) : (
                <button onClick={handleNextQ}>Next</button>
            )}
        </div>
    );
}

export default Quiz;
