import React from 'react'
import css from './input.module.css'

interface InputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    type?: HTMLInputElement['type']
};

export const Input:React.FC<InputProps> = ({placeholder, type, ...rest})=> {
    return (
    <input className={`${css["input"]}`} placeholder={placeholder} type={type} {...rest}/>);
};