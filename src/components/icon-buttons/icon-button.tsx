import React from 'react'
import css from './icon-button.module.css'
import { IconType } from 'react-icons';

interface IconButtonProps{
    ICO:IconType,
    href?:string
};

export const IconButton:React.FC<IconButtonProps> = ({ICO,href})=> {
    return (
        <a href={`${href}`}>
    <button className = {'icon-btn'}>
        <ICO/>
    </button></a>);
};