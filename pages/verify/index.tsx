import React, { useState } from "react";
import css from "./search.module.css"
import MainSection from "@/components/mainSection/mainSection"
import BookCard from "@/components/book card/bookCard";
import { useGetAdvertisementQuery, useGetTrendingBooksQuery, useGetBookRatingLazyQuery, useGetBuyerHistoryQuery, useSearchAdvertisementsLazyQuery} from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import Advert from "@/components/advert/advert";
import { useRouter } from "next/router";
import HistoryCard from "@/components/history card/historyCard";
import VerifyCard from "@/components/verifyCard/verifyCard";

import SearchBar from "@/components/search bar/searchBar";
import SearchCard from "@/components/searchCard/SearchCard";

function Test() {

    const router = useRouter();

    const [searchAds] = useSearchAdvertisementsLazyQuery();

    const [searchRes, setSearchRes] = useState([]);

    const onSearch = (results) => {
        setSearchRes(results ?? [])
        console.log(results)
    }

    const onAdvanceSearch = (results) => {
        console.log(results.data);
        setSearchRes(results ?? []);
    }

    const {data:buyerHistory, loading: buyerHistoryLoading} = useGetBuyerHistoryQuery();
    if(buyerHistoryLoading ) return <>Loading...</>

    return <MainSection>
        <div id={css["root"]}>
            <div className={css["section"]}>
                <h1>Search Unverified Books</h1>

                <SearchBar onAdvancedSearch={onAdvanceSearch} onSearch={onSearch} />
                <div className={css["comp"]}></div>
            </div>
            <div className={css["similar"]}>
                <h1>Search Results</h1>
                <div className={css["comp"]}></div>

                <VerifyCard type="purchase" verifyItems={buyerHistory.getBuyerHistory} />
            </div>

        </div>
    </MainSection>
}

export default withApollo({ ssr: true })(Test);