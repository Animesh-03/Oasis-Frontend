import React from 'react'
import css from './actionItem.module.css'
import { AiFillStar } from "react-icons/ai";
import { TouchType } from '@/graphql/generated/generated';
import Button from '../button/button';

interface ActionProps {
    title:string,
    author?:string,
    price?:string,
    participant?:string,
    touchId?:TouchType
}

const ActionItem:React.FC<ActionProps> = (e)=>{
    return <div className={css["root"]}>
        <div className={["grid grid-cols-6",css["tab"]].join(" ")}>
        <div className='flex-col'><p className='text-2xl font-bold'>{e.title}</p><p className='text-xl font-light text-slate-500'>{e.author}</p></div>
        <div ><p className='text-2xl font-bold'>{e.price}</p></div>
        <div ><p className='text-2xl font-bold'></p></div>
        <div ><p className='text-2xl font-bold'>{e.participant}</p></div>
        <div ><p className=' flex items-center text-2xl font-bold'>4.5 <AiFillStar color='yellow' size={"1.5em"}/></p></div>
        <div className='flex-col'><Button label="Accept" variant='elong'></Button><Button label="Reject" variant='elong'></Button></div>
        </div>
        </div>
};

export default ActionItem;