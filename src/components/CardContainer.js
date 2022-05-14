import React, { useState, useEffect } from "react";
import Card from "./Card";

import alaskanMalamute from "../assets/alaskanmalamute";
import bulldog from "../assets/bulldog";
import germanSheperd from "../assets/germansheperd";
import goldenRetreiver from "../assets/goldenretreiver";
import labradorRetreiver from "../assets/labradorretreiver";
import pomeranian from "../assets/pomeranian";
import pug from "../assets/pug";
import shibaInu from "../assets/shibainu";
import shihTzu from "../assets/shihtzu";
import siberianHusky from "../assets/siberianhusky";

function CardContainer(props) {
    const { handleGame, score, highScore } = props;

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

    const []
}