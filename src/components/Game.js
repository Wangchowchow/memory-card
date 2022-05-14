import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Score from "./Score";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    const addScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const bestScoreValue = () => {
        setBestScore(score);
    };

    const cardPosition = (cardValue) => {
        setCards((prevPosition) => [...prevPosition, cardValue]);
    };

    const resetGame = () => {
        setScore(0);
        setCards([]);
    };

    const handleGame = (cardValue) => {
        if (!cards.includes(cardValue)) {
            cardPosition(cardValue);
            addScore();
        } else {
            bestScoreValue();
            resetGame();
        }
    };

    return (
        <div>
            <Score score={score} bestScore={bestScore}></Score>
            <CardContainer handleGame={handleGame} score={score} bestScore={bestScore}></CardContainer>
        </div>
    );
}

export default Game;