import React from "react";
import { Text, EColor } from "../../../Text/Text";
import style from './userblock.css';
import { IconAvatar } from "../../../Icons/IconAvatar";
import { Break } from "../../../Break/Break";

interface IUserBlockProps {
    avatarSrc?: string,
    username?: string,
}

export const UserBlock = ({ avatarSrc, username }: IUserBlockProps) => {
    return (
        <a
            className={style.userBox}
            href="https://www.reddit.com/api/v1/authorize?client_id=ZPMAztutkM-2tm1o5VZ8cw&response_type=code&state=random_stringG&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity mysubreddits"
        >
            <div className={style.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={style.avatarImage} />
                    : <IconAvatar />
                }
            </div>

            <div className={style.username}>
                <Break size={12}/>
                <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
}