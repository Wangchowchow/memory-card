import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Score from "./Score";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    const addScore = () => {
        setScore(score + 1);
    };

    const addBestScore = () => {
        setBestScore(score + 1);
    };

    const addCard = (newCard) => {
        setCards((card) => [...card, newCard]);
    };

    const resetGame = () => {
        setScore(0);
        setCards([]);
    };

    const handleGame = (newCard) => {
        if (!cards.includes(newCard)) {
            addCard(newCard);
            addScore();
            const newScore = score + 1;
            if (newScore > bestScore) addBestScore();
        } else {
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