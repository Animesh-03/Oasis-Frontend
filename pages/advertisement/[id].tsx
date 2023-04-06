import React, { useState } from "react";
import css from "./advertisement.module.css"
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";
import MainSection from "@/components/mainSection/mainSection"
import Image from "next/image";
import clsx from "clsx";
import SearchBar from "@/components/search bar/searchBar";
import CategoryCard from "@/components/category card/categoryCard";
import BookCard from "@/components/book card/bookCard";
import { useGetAdvertisementQuery, useGetAllCategoriesQuery, useGetTrendingBooksQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import dashboard from "pages/dashboard";
import Advert from "@/components/advert/advert";
import { useRouter } from "next/router";

function Test() {
    const router = useRouter();
    const { data, loading } = useGetAdvertisementQuery({ variables: { advertisement: router.query.id as string } });
    const { data: trendingData, loading: trendingLoading } = useGetTrendingBooksQuery();


    if (loading || trendingLoading) return <>Loading...</>

    return <MainSection>
        <div id={css["root"]}>
            <div className={css["section"]}>
                <h1>Book Details</h1>
                <Advert title={data.getAdvertisement.book.bookName} author={data.getAdvertisement.book.authorName} desc={data.getAdvertisement.book.description}
                    price={data.getAdvertisement.price} seller={data.getAdvertisement.seller.fullName}></Advert>
            </div>

            <div className={css["similar"]}>
                <h1>More books</h1>
                <div className={css["scroll"]}>
                    {trendingData?.getTrendingBooks.map(book => {
                        return <BookCard key={book.bookName} title={book.bookName} description={book.description} />
                    })}
                </div>
            </div>
        </div>
    </MainSection>
}

export default withApollo({ ssr: true })(Test);