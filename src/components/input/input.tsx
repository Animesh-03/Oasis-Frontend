import React from 'react'
import css from './input.module.css'

interface InputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    
};

export const Input:React.FC<InputProps> = ({placeholder,...rest})=> {
    return (
    <input className={`${css["input"]}`} placeholder={placeholder} {...rest}/>);
};