import React from "react";
import style from "./karmaCounter.css";

interface IKarmaCounter {
    score: number,
}

export const KarmaCounter = ({score}: IKarmaCounter) => {
    const rating = score > 1000 ? `${Math.floor(score/1000)}k` : score;
    return (
        <div className={style.karmaCounter}>
            <button className={style.up}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
                </svg>
            </button>
            <span className={style.karmaValue}>{rating}</span>
            <button className={style.down}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9" />
                </svg>
            </button>
        </div>
    );
}