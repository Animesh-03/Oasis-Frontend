import clsx from 'clsx';
import React from 'react'
import css from './action.module.css'
import IconButton from '../icon-buttons/icon-button';
import { RiLogoutCircleLine } from "react-icons/ri";
import BookCard from '../book card/bookCard';
import ActionItem, { ActionItemProps } from '../action item/actionItem';

interface ActionProps {
    type: "touch" | "respond" | "confirm"
    participant: "seller" | "buyer"
    actionItems: any[]
}

const ActionCard:React.FC<ActionProps> = ({type, participant, actionItems})=>{

    

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
            
            {actionItems.map(item => {
                return <ActionItem 
                    title={item.advertisement.book.bookName} 
                    author={item.advertisement.book.authorName} 
                    touchPrice={item.price} 
                    price={item.advertisement.price}
                    participant={participant === "seller" ? item.advertisement.seller.fullName : item.buyer.fullName}
                    touchId={item.id}
                    key={item.id}
                    variant={type}
                    advertisementID={item.advertisement.id}
                />
            })}
        </div>
    </div>
    )
};

export default ActionCard;