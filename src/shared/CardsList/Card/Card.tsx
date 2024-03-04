import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import style from "./card.css";
import { TextContent } from "./TextContent/TextContent";
import { Preview } from "./Preview/Preview";
import { Menu } from "./Menu/Menu";
import { Controls } from "./Controls/Controls";
import { tokenContext } from "../../../context/tokenContext";
import axios from "axios";

interface ICardProps {
    id: string
    create_at: number,
    title: string,
    avatar: string,
    author: string,
    score: number,
    imgSrc: string,
    subreddit: string
}

function f (id: string, setComments: Dispatch<SetStateAction<undefined>>, subreddit:string) {

    axios
    .get(`http://api.reddit.com/r/${subreddit}/comments/${id}`)
        .then((resp) => {
            setComments(resp.data);
        })
        .catch(console.log);
}

export const Card = ({ create_at, title, avatar, score, author, imgSrc, id, subreddit }: ICardProps) => {
    const [comments, setComments] = useState();

    return (
        <li className={style.card}>
            <TextContent create_at={create_at} title={title} avatar={avatar} author={author} id={id} subreddit={subreddit} />
            <Preview imgSrc={imgSrc} />
            <Menu />
            <Controls score={score} />
        </li>
    );
}