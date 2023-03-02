import css from "./categoryCard.module.css"

const CategoryCard = ()=> {
    return (
        <div className={css.root}>
            <div>
                <img className="rounded-xl" src={"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"} />
                
            </div>
            <div className={css.inner}>
                <p className="text-2xl font-semibold">Science</p>
                <p className="text-xs font-extralight break-words">Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet</p>
            </div>
        </div>
    )
}
export default CategoryCard;