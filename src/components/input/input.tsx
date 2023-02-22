import React from 'react'
import css from './input.module.css'

interface InputProps{
    placeholder:string
};

export const Input:React.FC<InputProps> = ({placeholder})=> {
    return (
    <input className={`input`} placeholder={placeholder}/>);
};