import React from "react";
import { IconDropdown } from "../Icons/Icondropdown";
import { IconComments } from "../Icons/IconComments";
import { IconShare } from "../Icons/IconShare";
import { IconBlock } from "../Icons/IconBlock";
import { IconSave } from "../Icons/IconSave";
import { IconWarning } from '../Icons/IconWarning';
import classNames from "classnames";
import style from "./Icon.css";


export enum EIcons {
    dropdown = 'dropdown',
    comments = 'comments',
    share = 'share',
    block = 'block',
    save = 'save',
    warning = 'warning',
}

const icons = {
    [EIcons.dropdown]: <IconDropdown />,
    [EIcons.comments]: <IconComments />,
    [EIcons.share]: <IconShare />,
    [EIcons.block]: <IconBlock />,
    [EIcons.save]: <IconSave />,
    [EIcons.warning]: <IconWarning />,
}

type Ticonsise = 12 | 14 | 16 | 20;

interface IIconProps {
    size?: Ticonsise;
    name: EIcons;
}

export const Icon = (props: IIconProps) => {
    const { size, name} = props;

    const classes = classNames (
        style[`si${size}`]
    );

    return (
        <span className={classes}>{icons[name]}</span>
    );
}