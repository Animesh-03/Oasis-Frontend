import React from 'react'
import css from './historyCard.module.css'
import BuyerHistoryItem from '../buyer history item/buyerHistoryItem';

interface HistoryCardProps {
    type: "purchase" | "sale"
    historyItems: any[]
}

const HistoryCard:React.FC<HistoryCardProps> = ({historyItems, type})=>{

    console.log(historyItems[0]);

    return( 
    <div className={css["root"]}>

        <p className={[css["title"],"mb-10"].join(" ")}>{type === "purchase" ? "Purchase History" : "Sale History"}</p>

        <div className={["grid grid-cols-7",css["grid"]].join(" ")}>
            <p>Book</p>
            <p>Quoted Price</p>
            <p>Touched Price</p>
            <p>{type === "purchase" ? "Seller" : "Buyer"}</p>
            <p>Status</p>
            <p>Rating</p>
            <p>Options</p>
        </div>

        <div className={css["tab"]}>
            {/* Specify touch id */}
            
            {historyItems.map(item => {
                return <BuyerHistoryItem 
                    title={item.advertisement.book.bookName} 
                    author={item.advertisement.book.authorName} 
                    touchPrice={item.price} 
                    price={item.advertisement.price}
                    key={item.id}
                    advertisementId={item.advertisement.id}
                    participant={type === "purchase" ? item.advertisement.seller.fullName : item.buyer.fullName}
                    bought={item.isFinal}
                    type={type}
                    phoneNo={item.advertisement?.seller?.phoneNo ?? item.buyer?.phoneNo}
                />
            })}
        </div>
    </div>
    )
};

export default HistoryCard;