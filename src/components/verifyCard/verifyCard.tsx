import React from 'react'
import css from './verifyCard.module.css'
import BuyerHistoryItem from '../buyer history item/buyerHistoryItem';
import VerifyItem from '../verifyItem/verifyItem';

interface VerifyCardProps {
    type: "purchase" | "sale"
    verifyItems: any[]
}

const HistoryCard:React.FC<VerifyCardProps> = ({verifyItems, type})=>{

    return( 
    <div className={css["root"]}>

        <p className={[css["title"],"mb-10"].join(" ")}>{"Unverified Books"}</p>

        <div className={["grid grid-cols-6",css["grid"]].join(" ")}>
            <p>Book</p>
            <p>Quoted Price</p>
            <p>Genre</p>
            <p>Seller</p>
            <p>Rating</p>
            <p>Options</p>
        </div>

        <div className={css["tab"]}>
            {/* Specify touch id */}
            
            {verifyItems.map(item => {
                return <VerifyItem 
                    title={item.advertisement.book.bookName} 
                    author={item.advertisement.book.authorName} 
                    touchPrice={item.price} 
                    price={item.advertisement.price}
                    key={item.id}
                    advertisementId={item.advertisement.id}
                    participant={type === "purchase" ? item.advertisement.seller.fullName : item.buyer.fullName}
                    bought={item.isFinal}
                    type={type}
                    genre={item.advertisement.genre||"missing"}
                    phoneNo={item.advertisement?.seller?.phoneNo ?? item.buyer?.phoneNo}
                />
            })}
        </div>
    </div>
    )
};

export default HistoryCard;