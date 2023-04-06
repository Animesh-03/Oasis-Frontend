import IconButton from "@/components/icon-buttons/icon-button";
import React, { useState } from "react";
import styles from "./searchResult.module.css";
import { Input } from "@/components/input/input";
import clsx from "clsx";
import Button from "@/components/button/button";
import { useLoginUserMutation, useRegisterUserMutation } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import MainSection from "@/components/mainSection/mainSection";
import SearchBar from "@/components/search bar/searchBar";
import SearchCard from "@/components/searchCard/SearchCard";

function SearchResult(){
    const [searchData, setSearchData] = useState([
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        },
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        },
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        },
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        },
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        },
        {
            "imageUrl": "https://i0.wp.com/wordket.com/wp-content/uploads/2021/05/hiw.jpg?fit=1280%2C720&ssl=1",
            "title":"Fall to Earth",
            "author":"Ken Britz",
            "price":"250",
            "tags": ["Science", "Fiction", "Fantasy"],
        }
    ])
    const onSearch = () => {
    }
    return <MainSection>
            <div className={clsx([styles.hero])}>
                        <div className={styles["hero-text"]}>
                            <div>Finding a book</div>
                            <div>was never</div>
                            <div>easier</div>
                        </div>
                    <SearchBar onSearch={onSearch} />
            </div>
        <div className = {styles["root"]}>
            <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-black">Results</p>
            <div className={styles.inner}>
            {searchData.map(data => {
                return (
                    <SearchCard props={data} />
                )
            })}
            </div>
        </div> 
        </MainSection>
}
export default withApollo({ ssr: true })(SearchResult);