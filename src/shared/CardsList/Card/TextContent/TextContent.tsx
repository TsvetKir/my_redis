import React from "react";
import style from "./textContent.css";
import { Title } from "./Title/Title";
import { MetaData } from "./MetaData/MetaData";

interface ITextContent {
    title: string,
    create_at: number,
    avatar: string,
    author: string,
    id: string,
    subreddit: string,
}

export const TextContent = ({title, create_at, avatar, author, id, subreddit}: ITextContent) => {
    return (
        <div className={style.textContent}>
            <MetaData create_at={create_at} avatar={avatar} author={author}/>
            <Title title={title} id={id} subreddit={subreddit}/>
        </div>
    );
}