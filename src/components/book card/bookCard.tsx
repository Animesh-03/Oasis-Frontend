import css from "./bookCard.module.css"

const BookCard = ()=> {
    return (
        <div className={css.root}>
            <div className="w-2/4">
                <img src={"https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} width={200} height={200} />
            </div>
            <div className={css.inner}>
                <p className="text-2xl font-semibold">Science</p>
                <p className="text-xs font-extralight">Lorem ipsum</p>
            </div>
        </div>
    )
}
export default BookCard;