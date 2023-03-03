import css from "./categoryCard.module.css"

interface CategoryCardProps{
    name:string,
    desc?:string
};
const CategoryCard:React.FC<CategoryCardProps> = ({name,desc})=> {
    return (
        <div className={css.root}>
            <div>
                <img className="rounded-xl" src={"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"} />
                
            </div>
            <div className={css.inner}>
                <p className="text-2xl font-semibold">{name}</p>
                <p className="text-xs font-extralight break-words">{desc}</p>
            </div>
        </div>
    )
}
export default CategoryCard;