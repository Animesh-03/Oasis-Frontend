import React from "react"
import css from "./pieChart.module.css"
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle, Pie, PieChart } from "recharts"

interface PieCardProps {
    data: any
    name: string
}

const PieCard: React.FC<PieCardProps> = ({data, name}) => {

    return (
        <div className={css.root}>
            <div className={css.header}>
                <p>{name}</p>
            </div>
            <div>
                <PieChart width={730} height={600}>
                    <Tooltip />
                    <Legend />
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={250} fill="#1B59F8" />
                </PieChart>
            </div>
        </div>
    )
} 

export default PieCard;