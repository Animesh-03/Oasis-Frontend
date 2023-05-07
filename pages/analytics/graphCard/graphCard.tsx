import React from "react"
import css from "./graphCard.module.css"
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle } from "recharts"

interface GraphCardProps {
    data: any
    name: string
}

const GraphCard: React.FC<GraphCardProps> = ({data, name}) => {

    return (
        <div className={css.root}>
            <div className={css.header}>
                <p>{name}</p>
            </div>
            <div>
                <BarChart width={730} height={450} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="touches" fill="#1B59F8" shape={<Rectangle radius={[100,100,100,100]}/>} maxBarSize={15} />
                </BarChart>
            </div>
        </div>
    )
} 

export default GraphCard;