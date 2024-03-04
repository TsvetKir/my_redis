import React from "react";
import style from "./preview.css";

interface IPreviewProps {
    imgSrc: string,
}

export const Preview = ({imgSrc}:IPreviewProps) => {
    return (
        <div className={style.preview}>
            <img
                className={style.previewImg}
                src={imgSrc ? imgSrc : 'https://i.playground.ru/e/QTo9pAA4eovbTYn8Wfza4A.jpeg.webp?280x260'}
                alt="preview"
            />
        </div>
    );
}

