import React, { useState } from "react";
import styles from "./searchResult.module.css";
import clsx from "clsx";
import { useSearchAdvertisementsLazyQuery, useSearchAdvertisementsQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import MainSection from "@/components/mainSection/mainSection";
import SearchBar from "@/components/search bar/searchBar";
import SearchCard from "@/components/searchCard/SearchCard";
import { useRouter } from "next/router";

function SearchResult(){

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

    React.useEffect(() => {
        searchAds({
            variables: {
                searchInput: {
                    authorName: router.query.author as string,
                    bookName: router.query.bookName as string,
                    category: router.query.category as string,
                    sellerName: router.query.seller as string
                }
            },
            onCompleted(data) {
                setSearchRes(data.searchAdvertisements);
            },
        });
    }, [])


    return <MainSection>
            <div className={clsx([styles.hero])}>
                        <div className={styles["hero-text"]}>
                            <div>Finding a book</div>
                            <div>was never</div>
                            <div>easier</div>
                        </div>
                    <SearchBar onAdvancedSearch={onAdvanceSearch} onSearch={onSearch} />
            </div>
        <div className = {styles["root"]}>
            <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-black">Results</p>
            <div className={styles.inner}>
            {searchRes.length > 0 ? searchRes.map((data, index) => {
                return (
                    <SearchCard key={index} id={data.id} author={data.book.authorName} imageUrl={data.images[0]} price={data.price} tags={["Science", "Fiction", "Sci-Fi"]} title={data.book.bookName} />
                )
            }) : <div className="text-center w-full">No Advertisments Found</div>}
            </div>
        </div> 
        </MainSection>
}
export default withApollo({ssr: true})(SearchResult);