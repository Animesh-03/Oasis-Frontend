import React from 'react'
import css from './button.module.css' 

interface ButtonProps{
    col?: string,
    label: string,
};

export const Button:React.FC<ButtonProps> = ({col, label})=> {
    console.log(css[col]);
    console.log(css);
    return (
    <button className={`${css[col]}`}>
        {label}
    </button>);
};