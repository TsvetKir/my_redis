import React, { useEffect, useRef } from "react";
import style from './post.css';
import ReactDOM from "react-dom";
import { useComments } from "../../../../../../hooks/useComments";

interface IPost {
    onClose?: () => void;
    id: string,
    subreddit: string
}

export const Post = (props: IPost) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.()
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    const node = document.querySelector('#post_root');
    if (node == null) return null;
    const answ: any = useComments(props.id, props.subreddit);
    return ReactDOM.createPortal((
        <div className={style.modal} ref={ref}>
            <h2>FCHGVJHBKJLK:L":KJBHVGHCFVGHBJNKML</h2>
            <div className={style.content}>
                <p>{answ.data.children[0].data.body}</p>
                <p>{answ.data.children[2].data.body}</p>
                <p>{answ.data.children[5].data.body}</p>
            </div>
        </div>
    ), node)
}