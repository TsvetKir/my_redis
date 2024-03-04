import React, { useState } from 'react';
import { Text, EColor } from '../../../../Text/Text';
import style from "./dropdown.css";
import ReactDOM from 'react-dom';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => { };

export const Dropdown = ({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen === undefined){
            setIsDropdownOpen(!isDropdownOpen);
        }
    }

    const node = document.querySelector('#dropdown_root');
    if (node == null) return null;

    return (
        <div className={style.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && ReactDOM.createPortal((
                <div className={style.listContainer}>
                    <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </ul>
                    <button className={style.dropdownItemClose} onClick={() => setIsDropdownOpen(false)}>
                        <Text size={14} mobileSize={12} color={EColor.grey66}>Закрыть</Text>
                    </button>
                </div>), node)
                }
        </div>

    );
}