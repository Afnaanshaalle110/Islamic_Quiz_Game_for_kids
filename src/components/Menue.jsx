import "../index.css";
import { useContext } from "react";
import { GameContext } from "../Pages/Contexts";

const Menue = () => {
  const { Game, setGame, userName, setUserName } = useContext(GameContext);
  return (
    <div className="Menu">
      <label>Enter Your Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGame("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menue;
