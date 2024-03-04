import React from "react";
import classNames from "classnames";
import style from "./text.css";

type Tsize = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
    black = "black",
    green = "green",
    orange = "orange",
    white = "white",
    greyF4 = "greyF4",
    greyF3 = "geayF3",
    greyD9 = "greyD9",
    greyC4 = "greyC4",
    grey99 = "grey99",
    grey66 = "grey66",
    greyEC = "greyEC",
}

interface ITextProps {
    As?: "span" | "h1" | "h2" | "h3" | "h4" | "div" | "p";
    children?: React.ReactNode;
    size: Tsize;
    mobileSize?: Tsize;
    tableSize?: Tsize;
    desktopSize?: Tsize;
    color?: EColor;
}

export const Text = (props: ITextProps) => {
    const {
        As = "span", 
        children,
        size,
        mobileSize,
        tableSize,
        desktopSize, 
        color = EColor.black
    } = props;

    const classes = classNames(
        style[`s${size}`],
        style[`${color}`],
        {[style[`m${mobileSize}`]] : mobileSize},
        {[style[`t${tableSize}`]] : tableSize},
        {[style[`d${desktopSize}`]] : desktopSize},
    );
    
    return (
        <As className={classes}>
            {children}
        </As>
    );
}