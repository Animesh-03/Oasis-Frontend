import Button from "@/components/button/button";
import css from "./SearchCard.module.css"
import { useRouter } from "next/router";


interface SearchCardProps {
    id : string
    title: string,
    author: string,
    imageUrl: string,
    price: number,
    tags: string[]
}

const SearchCard : React.FC<SearchCardProps> = ({id, title, author, imageUrl, price, tags})=> {
    const router = useRouter();

    return (
        <div className={css.root}>
            <div className={css.image}>
                <img className="rounded-xl" src={imageUrl ?? "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} />
            </div>
            <div className={css.inner}>
                <div className={css.title}>{title}</div>
                <div className={css.author}>{author}</div>
                <div className={css.price}>&#8377; {price}</div>
                <div className={css.tags}>
                {
                    tags?.map((tag) => {
                        return (
                            <Button key={tag} label={tag} variant= "light"></Button>
                        )
                    })
                }
                </div>
                <Button onClick={() => router.push(`/advertisement/${id}`)} label="View Details"></Button>
            </div>
        </div>
    )
}
export default SearchCard;