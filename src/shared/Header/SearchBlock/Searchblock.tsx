import React, { useContext } from "react";
import style from "./searchblock.css"
import { UserBlock } from "./UserBlock/UserBlock";
import { userContext } from "../../../context/userContext";

export const SearchBlock = () => {
    const {name, iconImg} = useContext(userContext);

    return (
        <div className={style.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name} />
        </div>
    );
}