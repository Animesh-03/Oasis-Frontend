import { AdvertisementType, useRateBookMutation, useTouchAdvertisementMutation } from '@/graphql/generated/generated';
import Button from '../button/button';
import {Input} from '../input/input';
import css from './advert.module.css';
import React from 'react';
import { useRouter } from 'next/router';
import { AiFillStar } from 'react-icons/ai';

//there will be some redundant stuff after integration
interface AdvertProps{
    title:string,
    author:string,
    id: string,
    desc:string
    price:number,
    seller:string,
    sellerNo:string,
    image: string,
    bought: boolean
    rating: number
    bookId: string
};

function Advert(e:AdvertProps)
{
    const router = useRouter();

    const touchPriceRef = React.useRef<HTMLInputElement>();
    const ratingRef = React.useRef<HTMLInputElement>();

    const [touchAdvertisement] = useTouchAdvertisementMutation();
    const [rateBook] = useRateBookMutation();


    const onRequest = async (e) => {
        e.preventDefault();

        await touchAdvertisement({
            variables: {
                touchAdvertisement: {
                    price: Number(touchPriceRef.current.value),
                    advertisementId: router.query.id as string
                }
            }
        });

        await router.push("/actions");
    }

    return <div className={css["root"]}>
        <div className={css["left"]}>
            <img className='object-cover' src={e.image ?? "https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"}></img>
            <div className={css["ImgBottom"]}>
                <Button onClick={onRequest} label='Request' variant='elong'></Button> 
                <Input reference={touchPriceRef} onChange={e => console.log(touchPriceRef.current.value)} />
            </div>
        </div>
        <div className={css["right"]}>
            <h1>{e.title}</h1>
            {e.bought ? <p className=' flex items-center text-2xl font-bold'>{e.rating} <AiFillStar color='yellow' size={"1.5em"}/></p> : ''}
            <h2>{e.author}</h2>
            <p>{e.desc}</p>
            <h1>&#8377; {e.price}</h1>
        <div className={css["tags"]}></div>
            <h2> Seller</h2>
            <p>{e.seller}</p>
            {e.bought && <p>{e.sellerNo}</p>}
            {
                e.bought ?
                <div className='flex flex-col justify-start'>
                <Input reference={ratingRef} onChange={e => console.log(touchPriceRef.current.value)} />
                <Button onClick={async (ev) => {
                    ev.preventDefault();

                    await rateBook({
                        variables: {
                            rateBookBookId: e.bookId,
                            rating: Number(ratingRef.current.value)
                        }
                    });
                    router.reload();
                }} label='Rate' variant='elong'></Button> 
            </div>
            : <></>
            }
        <Button onClick={() => router.push("/actions")} label="Buy Now" variant='elong'></Button>
        </div>
    </div>
}

export default Advert;