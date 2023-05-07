import React from "react";
import css from "./analytics.module.css"
import MainSection from "@/components/mainSection/mainSection"
import BookCard from "@/components/book card/bookCard";
import { useGetAdvertisementQuery, useGetTrendingBooksQuery, useGetBookRatingLazyQuery, useGetAnalyticsQuery} from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import Advert from "@/components/advert/advert";
import { useRouter } from "next/router";
import InfoCard from "@/components/analytics/infoCard";
import { Bar, BarChart, CartesianGrid, Legend, PieChart, Rectangle, XAxis, YAxis } from "recharts";
import { Tooltip } from "react-bootstrap";
import GraphCard from "./graphCard/graphCard";
import PieCard from "./pieChart/pieChart";

function Test() {

    const {data, loading} = useGetAnalyticsQuery();

    if(loading) return <>Loading...</>

    let touchData = [
        {
            name: "Jan",
            touches: 200,
        },
        {
            name: "Feb",
            touches: 245,
        },
        {
            name: "Mar",
            touches: 276,
        },
        {
            name: "Apr",
            touches: 180,
        },
        {
            name: "Jun",
            touches: 215,
        },
        {
            name: "Jul",
            touches: 90,
        },
        {
            name: "Aug",
            touches: 290,
        },
        {
            name: "Sept",
            touches: 320,
        },
        {
            name: "Cot",
            touches: 360,
        },
        {
            name: "Nov",
            touches: 450,
        },
        {
            name: "Dec",
            touches: 475,
        },
    ];

    const salesData = [
        {
            name: "Jan",
            touches: 350,
        },
        {
            name: "Feb",
            touches: 380,
        },
        {
            name: "Mar",
            touches: 390,
        },
        {
            name: "Apr",
            touches: 450,
        },
        {
            name: "Jun",
            touches: 500,
        },
        {
            name: "Jul",
            touches: 680,
        },
        {
            name: "Aug",
            touches: 900,
        },
        {
            name: "Sept",
            touches: 950,
        },
        {
            name: "Cot",
            touches: 1000,
        },
        {
            name: "Nov",
            touches: 1150,
        },
        {
            name: "Dec",
            touches: 1200,
        },
    ];

    const data1 = [
        {
            name: "Buyers",
            value: 197
        },
        {
            name: "Sellers",
            value: 597
        }
    ]

    const data2 = [
        {
            name: "Harry Potter And The Sorcerer's Stone",
            value: 450
        },
        {
            name: "Percy Jackson And The Lightning Thief",
            value: 300
        },
        {
            name: "Loathe To Love You",
            value: 200
        },
        {
            name: "The Time Machine",
            value: 150
        },
        {
            name: "Others",
            value: 5
        },
    ]
      
    return <MainSection>
        <div id={css["root"]}>
            <div className={css["section"]}>
                <h1>Analytics</h1>
                <div className={css["comp"]}>
                    <div className="grid grid-cols-2 gap-16">
                        <div className="grid grid-cols-3 gap-8">
                            <InfoCard name={"Number of Buyers"} content={data.getNumberOfBuyers.toString()} />
                            <InfoCard name={"Total Sale Amount"} content={"$"+data.getTotalSaleAmount.toString()} />
                            <InfoCard name={"Number of Sellers"} content={data.getNumberOfSellers.toString()} />
                            <InfoCard name={"Number of Touches"} content={data.getNumberOfTouches.toString()} />
                            <InfoCard name={"Average Touch Price"} content={"$"+data.getAverageTouchPrice.toString()} />
                            <InfoCard name={"Number of Active Touches"} content={data.getNumberOfActiveTouches.toString()} />
                            <InfoCard name={"Number of Responds"} content={data.getNumberOfResponds.toString()} />
                            <InfoCard name={"Number of Accepts"} content={data.getNumberOfAccepts.toString()} />
                            <InfoCard name={"Number of Active Responds"} content={data.getNumberOfActiveResponds.toString()} />
                            <InfoCard name={"Number of Active Ads"} content={data.getNumberOfActiveAdvertisements.toString()} />
                            <InfoCard name={"Average Ad Price"} content={"$" + data.getAveragePostingPrice.toString()} />
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <GraphCard name="Touch Price" data={touchData} />
                            <GraphCard name="Total Sales" data={salesData} />
                        </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8">
                    <PieCard name="Sellers Vs Buyers" data={data1} />
                    <PieCard name="Sellers Vs Buyers" data={data2} />
                </div>

            </div>
        </div>

    </div>
</MainSection>
}

export default withApollo({ ssr: true })(Test);