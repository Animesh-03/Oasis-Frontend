import clsx from 'clsx';
import React from 'react'
import css from './button.module.css'

const variants = {
    primary: css.primary,
}

interface ButtonProps {
    label: string,
    variant?: string,
    type?:"button" | "submit" | "reset",
    outlined?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const Button:React.FC<ButtonProps> = ({outlined=false, variant='primary', type='button',onClick, label})=> {

    return (
    <button 
        className={clsx([css.root, variants[variant], outlined && css.outline])}
        type={type}
        onClick={onClick}
    >
        {label}
    </button>);
};

export default Button;