import clsx from 'clsx';
import React from 'react'
import css from './input.module.css'

const variants = {
    outlined: css.outlined
}

interface InputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    type?: HTMLInputElement['type'],
    variant?: keyof typeof variants
    value?: string
};

export const Input:React.FC<InputProps> = ({placeholder, type, variant="",value, ...rest})=> {
    return (
    <input className={clsx([css["input"], variants[variant]])} placeholder={placeholder} value = {value} {...rest}/>);
};