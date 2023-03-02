import css from "./categoryCard.module.css"

const CategoryCard = ()=> {
    return (
        <div className={css.root}>
            <div>
                <img src={"https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg"} width={200} height={200} />
            </div>
            <div className={css.inner}>
                <p className="text-2xl font-semibold">Science</p>
                <p className="text-xs font-extralight">Lorem ipsum</p>
            </div>
        </div>
    )
}
export default CategoryCard;