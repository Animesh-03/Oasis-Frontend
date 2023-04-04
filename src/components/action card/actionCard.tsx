import clsx from 'clsx';
import React from 'react'
import css from './action.module.css'
import IconButton from '../icon-buttons/icon-button';
import { RiLogoutCircleLine } from "react-icons/ri";
import BookCard from '../book card/bookCard';
import ActionItem from '../action item/actionItem';

interface ActionProps {
    Head:String
    Participant:String
}

const ActionCard:React.FC<ActionProps> = (e)=>{
    return <div className={css["root"]}>
        <p className={[css["title"],"mb-10"].join(" ")}>{e.Head}</p>
        <div className={["grid grid-cols-6",css["grid"]].join(" ")}>
        <p >Book</p>
        <p >Quoted Price</p>
        <p >Touched Price</p>
        <p >{e.Participant}</p>
        <p >Rating</p>
        <p >Options</p>
        </div>
        <div className={css["tab"]}>        
       
        {/* Specify touch id */}
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        <ActionItem title="The Walking Dead" author="Robert" price="20$"></ActionItem>
        </div>
        </div>
};

export default ActionCard;