import { useRouter } from "next/router"
import css from "./bookCard.module.css"

interface BookCardProps {
    imageURL?: string,
    title: string,
    description?: string
}

const BookCard: React.FC<BookCardProps> = ({imageURL, title, description})=> {
    const router = useRouter();

    return (
        <div className={css.root} onClick={() => router.push({
            "pathname": "/searchResult",
            query: {bookName: title}
        })}>
            <div>
                <img className="rounded-xl" src={imageURL ?? "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1"} />
            </div>
            <div className={css.inner}>
                 <p className="text-2xl font-semibold">{title}</p>
                <p className="text-xs font-extralight break-words">{description?.slice(0,50) +( description?.length > 30 ? '...' : '')}</p>
            </div>
        </div>
    )
}
export default BookCard;