import clsx from 'clsx';
import React from 'react'
import css from './action.module.css'
import IconButton from '../icon-buttons/icon-button';
import { RiLogoutCircleLine } from "react-icons/ri";
import BookCard from '../book card/bookCard';
import ActionItem from '../action item/actionItem';

interface ActionProps {
    type: "touch" | "respond" | "confirm"
    participant: "seller" | "buyer"
}

const ActionCard:React.FC<ActionProps> = ({type, participant})=>{

    let cardHeader;

    if(type === "touch") cardHeader = "Touched Books";
    else if(type === "respond") cardHeader = "Respond";
    else cardHeader = "Confirm";

    let participantType = participant === "seller" ? "Seller" : "Buyer";

    return( 
    <div className={css["root"]}>

        <p className={[css["title"],"mb-10"].join(" ")}>{cardHeader}</p>

        <div className={["grid grid-cols-6",css["grid"]].join(" ")}>
            <p >Book</p>
            <p >Quoted Price</p>
            <p >Touched Price</p>
            <p >{participantType}</p>
            <p >Rating</p>
            <p >Options</p>
        </div>

        <div className={css["tab"]}>
            {/* Specify touch id */}
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
            <ActionItem title="The Walking Dead" author="Robert" price="$20"></ActionItem>
        </div>
    </div>
    )
};

export default ActionCard;