import React from "react";
import style from "./userLink.css";
import { formDate } from "./utils/formDate";

interface IMetaDataProps {
    create_at: number,
    avatar: string,
    author: string,
}

export const MetaData = ({ create_at, avatar, author }: IMetaDataProps) => {
    const created = formDate(create_at);

    return (
        <div className={style.metaData}>
            <div className={style.userLink}>
                <img
                    className={style.avatar}
                    src={avatar ? avatar : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg'}
                    alt="avatar"
                />
                <a href="#user-url" className={style.username}>{author}</a>
            </div>
            <span className={style.createAt}>
                <span className={style.publishedLable}>опубликовано </span>
                {created}
            </span>
        </div>
    );
}