import Button from "@/components/button/button";
import css from "./SearchCard.module.css"

const SearchCard = ({props})=> {
    return (
        <div className={css.root}>
            <div className={css.image}>
                <img className="rounded-xl" src={props.imageUrl ?? "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} />
            </div>
            <div className={css.inner}>
                <div className={css.title}>{props.title}</div>
                <div className={css.author}>{props.author}</div>
                <div className={css.price}>Rs. {props.price}</div>
                <div className={css.tags}>
                {
                    props.tags?.map(tag => {
                        return (
                            <Button label={tag} variant= "light"></Button>
                        )
                    })
                }
                </div>
                <Button label="View Details"></Button>
            </div>
        </div>
    )
}
export default SearchCard;