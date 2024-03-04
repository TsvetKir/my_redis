import React from "react";
import { SearchBlock } from "./SearchBlock/Searchblock";
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";
import { SortBlock } from "./SortBlock/SortBlock";
import style from "./header.css";


export const Header = () => {
    return (
        <header className={style.header}>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    )
}