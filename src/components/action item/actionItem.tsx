import React from 'react'
import css from './actionItem.module.css'
import { AiFillStar } from "react-icons/ai";
import Button from '../button/button';
import { useRouter } from 'next/router';
import { useRespondBuyerTouchMutation, useRespondSellerTouchMutation } from '@/graphql/generated/generated';

export interface ActionItemProps {
    title:string,
    author?:string,
    price?:string,
    touchId?:string
    touchPrice: number
    participant: string
    variant: "touch" | "respond" | "confirm"
    advertisementID?: string
    onAction: Function
}

const ActionItem:React.FC<ActionItemProps> = (e)=>{
    const router = useRouter();

    const [sellerRespond] = useRespondSellerTouchMutation();
    const [buyerRespond] = useRespondBuyerTouchMutation();


    return (
        <div className={css["root"]}>
            <div className={["grid grid-cols-6",css["tab"]].join(" ")}>
                <div className='flex-col'>
                    <p className='text-2xl font-bold'>{e.title}</p>
                    <p className='text-xl font-light text-slate-500'>{e.author}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>&#8377; {e.price}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>&#8377; {e.touchPrice}</p>
                </div>

                <div >
                    <p className='text-2xl font-bold'>{e.participant}</p>
                </div>

                <div >
                    <p className=' flex items-center text-2xl font-bold'>4.5 <AiFillStar color='yellow' size={"1.5em"}/></p>
                </div>
                <div className='flex-col'>
                    {e.variant === "touch" ?
                        <Button onClick={() => router.push(`/advertisement/${e.advertisementID}`)}  label='View Details' variant='elong'/> 
                        :
                        <>
                            <Button 
                            onClick={async () => {
                                if(e.variant === "respond")
                                {
                                    await sellerRespond({
                                        variables: {
                                            responseInput: {
                                                responsePrice: e.touchPrice,
                                                touchId: e.touchId,
                                                accept: true
                                            }
                                        }
                                    });

                                    console.log("Touch Accepted");
                                }
                                else
                                {
                                    await buyerRespond({
                                        variables: {
                                            respondBuyerTouchResponseInput2: {
                                                accept: true,
                                                touchId: e.touchId
                                            }
                                        }
                                    });

                                    console.log("Touch Confirmed");
                                }
                                await e.onAction();
                            }} 
                            label="Accept" 
                            variant='elong' />
                            <Button
                            onClick={async () => {
                                if(e.variant === "respond")
                                {
                                    await sellerRespond({
                                        variables: {
                                            responseInput: {
                                                responsePrice: e.touchPrice,
                                                touchId: e.touchId,
                                                accept: false
                                            }
                                        }
                                    });

                                    console.log("Touch Rejected");
                                }
                                else
                                {
                                    await buyerRespond({
                                        variables: {
                                            respondBuyerTouchResponseInput2: {
                                                accept: false,
                                                touchId: e.touchId
                                            }
                                        }
                                    });

                                    console.log("Touch Not Confirmed");
                                }
                                await e.onAction();
                            }}
                            label="Reject" 
                            variant='elong'></Button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};

export default ActionItem;