import css from "./bookCard.module.css"

interface BookCardProps {
    imageURL?: string,
    title: string,
    description?: string
}

const BookCard: React.FC<BookCardProps> = ({imageURL, title, description})=> {
    return (
        <div className={css.root}>
            <div>
                <img className="rounded-xl" src={imageURL ?? "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} />
            </div>
            <div className={css.inner}>
                 <p className="text-2xl font-semibold">{title}</p>
                <p className="text-xs font-extralight break-words">{description}</p>
            </div>
        </div>
    )
}
export default BookCard;