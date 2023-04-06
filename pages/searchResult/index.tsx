import IconButton from "@/components/icon-buttons/icon-button";
import React, { useState } from "react";
import styles from "./searchResult.module.css";
import { Input } from "@/components/input/input";
import clsx from "clsx";
import Button from "@/components/button/button";
import { useLoginUserMutation, useRegisterUserMutation, useSearchAdvertisementsQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import MainSection from "@/components/mainSection/mainSection";
import SearchBar from "@/components/search bar/searchBar";
import SearchCard from "@/components/searchCard/SearchCard";

function SearchResult(){

    const {data: allAds, loading} = useSearchAdvertisementsQuery({
        variables: {
            searchInput: {
                bookName: ''
            }
        }
    });

    const [searchRes, setSearchRes] = useState([]);

    const onSearch = (results) => {
        setSearchRes(results ?? [])
        console.log(results);
    }

    const onAdvanceSearch = (results) => {
        console.log(results.data);
        setSearchRes(results ?? []);
    }

    React.useEffect(() => {
        if(!loading) setSearchRes(allAds.searchAdvertisements.slice(0, 10));
    },[loading]);


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
            {searchRes.length && searchRes.map(data => {
                return (
                    <SearchCard key={data.imageUrl} id={data.id} author={data.book.authorName} imageUrl={data.images[0]} price={data.price} tags={["Science", "Fiction", "Sci-Fi"]} title={data.book.bookName} />
                )
            })}
            </div>
        </div> 
        </MainSection>
}
export default withApollo({ssr: true})(SearchResult);