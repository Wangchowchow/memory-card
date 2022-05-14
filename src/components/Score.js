import React from "react";

function Score(props) {
    const { score, bestScore } = props;

    return (
        <div className="score">
            <h1>Memory Card</h1>
            <p>Score : {score}</p>
            <p>Best Score : {bestScore}</p>
        </div>
    );
}

export default Score;