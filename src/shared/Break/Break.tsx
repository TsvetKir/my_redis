import React from "react";
import classNames from "classnames";
import style from "./break.css";

type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'table' | 'desktop';

interface IBreakProps {
    size: TBreakSize;
    mobilesize?: TBreakSize;
    tabletsize?: TBreakSize;
    desktopsize?: TBreakSize;
    inline?: boolean;
    top?: boolean;
}

export const Break = (props: IBreakProps) => {
    const {
        inline = false,
        top = false,
        size,
        mobilesize,
        tabletsize,
        desktopsize,
    } = props;

    return (
        <div
            className={classNames(
                style[`s${size}`],
                {[style[`mobile_s${mobilesize}`]] : mobilesize},
                {[style[`tablet_s${tabletsize}`]] : tabletsize},
                {[style[`desktop_s${desktopsize}`]] : desktopsize},
                {[style.inline] : inline},
                {[style.top] : top},
            )}>

        </div>
    );
}