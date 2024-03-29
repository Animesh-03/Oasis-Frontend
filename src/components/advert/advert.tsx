import { AdvertisementType, useTouchAdvertisementMutation } from '@/graphql/generated/generated';
import Button from '../button/button';
import {Input} from '../input/input';
import css from './advert.module.css';
import React from 'react';
import { useRouter } from 'next/router';

//there will be some redundant stuff after integration
interface AdvertProps{
    title:string,
    author:string,
    id: string,
    desc:string
    price:number,
    seller:string,
    image: string
};

function Advert(e:AdvertProps)
{
    const router = useRouter();

    const touchPriceRef = React.useRef<HTMLInputElement>();

    const [touchAdvertisement] = useTouchAdvertisementMutation();


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
            <h2>{e.author}</h2>
            <p>{e.desc}</p>
            <h1>&#8377; {e.price}</h1>
        <div className={css["tags"]}></div>
            <h2> Seller</h2>
            <p>{e.seller}</p>
        <Button onClick={() => router.push("/actions")} label="Buy Now" variant='elong'></Button>
        </div>
    </div>
}

export default Advert;