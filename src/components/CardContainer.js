import React, { useState, useEffect } from "react";
import Card from "./Card";

import alaskanMalamute from "../assets/alaskanmalamute.jpg";
import bulldog from "../assets/bulldog.jpg";
import germanSheperd from "../assets/germansheperd.jpg";
import goldenRetreiver from "../assets/goldenretreiver.jpg";
import labradorRetreiver from "../assets/labradorretreiver.jpg";
import pomeranian from "../assets/pomeranian.jpeg";
import pug from "../assets/pug.jpg";
import shibaInu from "../assets/shibainu.jpg";
import shihTzu from "../assets/shihtzu.jpg";
import siberianHusky from "../assets/siberianhusky.jpeg";

function CardContainer(props) {
    const { handleGame, score, bestScore } = props;

    let cards = [
        {
            src: alaskanMalamute,
            value: "Alaskan Malamute"
        },
        {
            src: bulldog,
            value: "Bulldog"
        },
        {
            src: germanSheperd,
            value: "German Sheperd"
        },
        {
            src: goldenRetreiver,
            value: "Golden Retreiver"
        },
        {
            src: labradorRetreiver,
            value: "Labrador Retreiver"
        },
        {
            src: pomeranian,
            value: "Pomeranian"
        },
        {
            src: pug,
            value: "Pug"
        },
        {
            src: shibaInu,
            value: "Shiba Inu"
        },
        {
            src: shihTzu,
            value: "Shih Tzu"
        },
        {
            src: siberianHusky,
            value: "Siberian Husky"
        }
    ];

    const [ arrangement, newArrangement ] = useState(cards);

    const shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--){
            let randomIndex = Math.floor(Math.random() * i);
            [cards[randomIndex], cards[i]] = [cards[i], cards[randomIndex]];
        }
    };

    useEffect(() => {
        const position = [...arrangement];
        shuffle(position);
        newArrangement(position);
    }, [ score, bestScore ]);

    return(
        <div className="card-container">
            {arrangement.map((item) => (
                <Card card={item} key={item.value} handleGame={handleGame}></Card>
            ))}
        </div>
    );
}

export default CardContainer;