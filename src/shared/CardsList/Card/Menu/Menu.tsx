import React from "react";
import { Dropdown } from "./DropDown/Dropdown";
import { GenericList } from "./GenericList/GenericList";
import { Text, EColor } from "../../../Text/Text";
import { Icon, EIcons } from "../../../Icon/Icon";
import style from "./menu.css";

const list = [
    {
        children: <Text size={14} mobileSize={12} color={EColor.grey99}><Icon name={EIcons.comments} size={14}/>Комменарии</Text>, className: "dropdownItem"
    },
    {
        children: <Text size={14} mobileSize={12} color={EColor.grey99}><Icon name={EIcons.share} size={14}/>Поделиться</Text>, className: "dropdownItem"
    },
    {
        children: <Text size={14} mobileSize={12} color={EColor.grey99}><Icon name={EIcons.block} size={14}/>Скрыть</Text>, className: "dropdownItem"
    },
    {
        children: <Text size={14} mobileSize={12} color={EColor.grey99}><Icon name={EIcons.save} size={14}/>Сохранить</Text>, className: "dropdownItem"
    },
    {
        children: <Text size={14} mobileSize={12} color={EColor.grey99}><Icon name={EIcons.warning} size={16}/>Пожаловаться</Text>, className: "dropdownItem"
    },
]

export const Menu = () => {

    return (
        <div className={style.menu}>
            <Dropdown button={
                <button className={style.menuButton}>
                    <Icon name={EIcons.dropdown} size={20}></Icon>
                </button>
            }>
                <GenericList list={list} />
            </Dropdown>

        </div>
    )
}