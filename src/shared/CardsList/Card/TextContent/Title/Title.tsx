import React, { useState } from "react";
import style from "./title.css";
import { Post } from "./Post/Post";

interface ITitleProps {
    title: string,
    id: string,
    subreddit: string,
}

export const Title = ({ title, id, subreddit }: ITitleProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <h2 className={style.title}>
            <a  className={style.postLink} onClick={() => setIsModalOpen(true)}>
                {title}
            </a>
            {isModalOpen &&
                <Post onClose={() => setIsModalOpen(false)} id={id} subreddit={subreddit}/>
            }
        </h2>
    );
}