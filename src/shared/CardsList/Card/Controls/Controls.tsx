import React from "react";
import style from "./controls.css";
import { KarmaCounter } from "./KarmaCounter/KarmaCounter";
import { CommentsButton } from "./CommentsButton/CommentsButton";
import { ShareButton } from "./ShareButton/ShareButton";
import { SaveButton } from "./SaveButton/SaveButton";

interface IControlsProps {
    score: number
}

export const Controls = ({score}:IControlsProps) => {
    return (
        <div className={style.controls}>
            <KarmaCounter score={score}/>
            <CommentsButton />
            <div className={style.actions}>
                <ShareButton />
                <SaveButton />
            </div>
        </div>
    );
}