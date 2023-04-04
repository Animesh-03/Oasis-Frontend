import clsx from 'clsx';
import React from 'react'
import css from './actionItem.module.css'
import IconButton from '../icon-buttons/icon-button';
import { RiLogoutCircleLine } from "react-icons/ri";
import BookCard from '../book card/bookCard';
import { TouchType } from '@/graphql/generated/generated';
import Button from '../button/button';

interface ActionProps {
    title:String,
    author?:String,
    price?:String,
    participant?:String
    touchId?:TouchType
}

const ActionItem:React.FC<ActionProps> = (e)=>{
    return <div className={css["root"]}>
        <div className={["grid grid-cols-6",css["tab"]].join(" ")}>
        <div className='flex-col'><p className='text-2xl font-bold'>{e.title}</p><p className='text-xl font-light text-slate-500'>{e.author}</p></div>
        <div ><p className='text-2xl font-bold'>{e.price}</p></div>
        <div ><p className='text-2xl font-bold'></p></div>
        <div ><p className='text-2xl font-bold'>{e.participant}</p></div>
        {/* add stars here */}
        <div ><p className='text-2xl font-bold'>4.5</p></div>
        <div className='flex-col'><Button label="Accept" variant='elong'></Button><Button label="Reject" variant='elong'></Button></div>
        </div>
        </div>
};

export default ActionItem;