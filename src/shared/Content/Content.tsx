import React from "react";
import style from "./content.css";

interface IContentProps {
    children ?: React.ReactNode;
}

export const Content = ({children}: IContentProps) => {
    return (
        <main className={style.content}>
            {children}
        </main>
    );
}