import { AdvertisementType } from '@/graphql/generated/generated';
import Button from '../button/button';
import {Input} from '../input/input';
import css from './advert.module.css'

//there will be some redundant stuff after integration
interface AdvertProps{
    title:string,
    author:string,
    advertisementID?:AdvertisementType,
    desc:string
    price:number,
    seller:string,
};

function Advert(e:AdvertProps)
{

    return <div className={css["root"]}>
        <div className={css["left"]}>
            <img src={"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"}></img>
            <div className={css["ImgBottom"]}><Button label='Request' variant='elong'></Button> <Input></Input></div>
        </div>
        <div className={css["right"]}>
            <h1>{e.title}</h1>
            <h2>{e.author}</h2>
            <p>{e.desc}</p>
            <h1>&#8377; {e.price}</h1>
        <div className={css["tags"]}></div>
            <h2> Seller</h2>
            <p>{e.seller}</p>
        <Button label="Buy Now" variant='elong'></Button>
        </div>
    </div>
}

export default Advert;