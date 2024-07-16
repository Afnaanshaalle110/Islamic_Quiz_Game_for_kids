import React, { createContext, useState } from 'react';

// Create the context
export const quizcontext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  // State to manage the game state, score, and username
  const [gameState, setgameState] = useState("menue");
  const [Score, setScore] = useState(0);
  const [username, setUsername] = useState("");

  return (
    // Provide the state and setState functions to the rest of the app
    <quizcontext.Provider value={{ gameState, setgameState, Score, setScore, username, setUsername }}>
      {children}
    </quizcontext.Provider>
  );
};
