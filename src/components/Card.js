import React from "react";

function Card(props) {
    const {
        card: { src, value },
        handleGame
    } = props;

    return (
        <button className="card" onClick={handleGame.bind(this, value)}>
            <img src={src} alt={value}></img>
            <p>{value}</p>
        </button>
    )
}

export default Card;