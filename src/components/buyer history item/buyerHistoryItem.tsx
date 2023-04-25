import { AiFillStar } from "react-icons/ai"
import css from './buyerHistoryCard.module.css'
import Button from "../button/button"
import { useRouter } from "next/router"

interface BuyerHistoryItemProps {
    title: string,
    author: string,
    price: number,
    touchPrice: number,
    advertisementId: string,
    participant: string,
    bought: boolean,
    type: "purchase" | "sale"
    phoneNo: string
}


const BuyerHistoryItem: React.FC<BuyerHistoryItemProps> = ({title, author, price, touchPrice, phoneNo,advertisementId, participant: seller, bought, type}) => {
    const router = useRouter();

    return (
        <div className={css["root"]}>
            <div className={["grid grid-cols-7",css["tab"]].join(" ")}>
                <div className='flex-col'>
                    <p className='text-2xl font-bold'>{title}</p>
                    <p className='text-xl font-light text-slate-500'>{author}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>&#8377; {price}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>&#8377; {touchPrice}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>{seller}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>{bought ? (type === "purchase" ? "Bought" : "Sold") : "Rejected"}</p>
                </div>

                <div >
                    <p className=' flex items-center text-2xl font-bold'>4.5 <AiFillStar color='yellow' size={"1.5em"}/></p>
                </div>
                <div className='flex-col'>
                    <Button onClick={async () => {
                        await router.push(`/advertisement/${advertisementId}`);}} label="View Details" variant="elong" />
                </div>
            </div>
        </div>
    )
}

export default BuyerHistoryItem;