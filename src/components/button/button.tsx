import React from 'react'
import css from './button.module.css' 

interface ButtonProps{
    col?: string,
    label: string,
};

export const Button:React.FC<ButtonProps> = ({col, label})=> {
    return (
    <button className={`${col}`}>
        {label}
    </button>);
};