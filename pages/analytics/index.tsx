import React from "react";
import css from "./analytics.module.css"
import MainSection from "@/components/mainSection/mainSection"
import BookCard from "@/components/book card/bookCard";
import { useGetAdvertisementQuery, useGetTrendingBooksQuery, useGetBookRatingLazyQuery} from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import Advert from "@/components/advert/advert";
import { useRouter } from "next/router";

function Test() {

    return <MainSection>
        <div id={css["root"]}>
            <div className={css["section"]}>
                <h1>Analytics</h1>
                <div className={css["comp"]}></div>
            </div>

        </div>
    </MainSection>
}

export default withApollo({ ssr: true })(Test);