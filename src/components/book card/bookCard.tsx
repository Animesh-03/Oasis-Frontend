import css from "./bookCard.module.css"

const BookCard = ()=> {
    return (
        <div className={css.root}>
            <div>
                <img className="rounded-xl" src={"https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} />
            </div>
            <div className={css.inner}>
                <p className="text-2xl font-semibold">How Innovation Works</p>
                <p className="text-xs font-extralight break-words">Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet</p>
            </div>
        </div>
    )
}
export default BookCard;