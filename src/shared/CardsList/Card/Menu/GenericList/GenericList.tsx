import React from "react";
import {generateRandomString} from "../DropDown/utils/generaterandomString";
import { withKey } from "../DropDown/utils/withKey";
import style from "../DropDown/dropdown.css";

interface IItem {
    id?: string;
    children: string | React.ReactNode;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'div' | 'button';
    href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => { };

export const GenericList = ({ list }: IGenericListProps) => {
    return (
        <>
            {list.map(({ As = 'li', className, children, onClick = noop, id = generateRandomString(), href}) => (
                < As
                    className={style[`${className}`]}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {children}
                </As >
            ))}
        </>
    );
}