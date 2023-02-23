import React from 'react'
import css from './icon-button.module.css'
import { IconType } from 'react-icons';
import clsx from 'clsx';

const variants = {
    primary: css.primary,
}

interface IconButtonProps{
    Icon:IconType,
    size: number
    variant?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const IconButton:React.FC<IconButtonProps> = ({Icon, size, onClick, variant = 'primary'})=> {
    return (
    <button className = {clsx([css.root, variants[variant]])} onClick={onClick} >
        <Icon size={size}/>
    </button>
    );
};

export default IconButton;