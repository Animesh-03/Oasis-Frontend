import clsx from 'clsx';
import React from 'react'
import css from './input.module.css'

const variants = {
    outlined: css.outlined,
    bordered: css.bordered
}

interface InputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>,HTMLInputElement>{
    type?: HTMLInputElement['type'],
    variant?: keyof typeof variants
    value?: string
    name?: string
    defaultValue? : string
    reference: React.LegacyRef<HTMLInputElement>
};

export const Input:React.FC<InputProps> = ({defaultValue,placeholder, type, variant="",value, name, reference, ...rest})=> {
    return (
    <input ref={reference} defaultValue = {defaultValue} className={clsx([css["input"], variants[variant]])} placeholder={placeholder} type={type} value = {value} name={name} {...rest}/>);
};