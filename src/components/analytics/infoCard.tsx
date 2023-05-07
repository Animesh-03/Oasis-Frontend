import React from "react"
import css from "./infoCard.module.css";
import clsx from "clsx";

interface InfoCardProps {
    name: string,
    content: string
}

const InfoCard: React.FC<InfoCardProps> = ({name, content}) => {



    return (
        <div className={css.root}>
            <div className={css.header}>
                <p>{name}</p>
            </div>
            <div className={clsx([css.content, "w-full h-full flex justify-start items-center"])}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default InfoCard;