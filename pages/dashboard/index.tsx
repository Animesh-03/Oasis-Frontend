import React, { useState } from "react";
import css from "./dashboard.module.css"
import MainSection from "@/components/mainSection/mainSection"
import clsx from "clsx";
import SearchBar from "@/components/search bar/searchBar";
import CategoryCard from "@/components/category card/categoryCard";
import BookCard from "@/components/book card/bookCard";
import { useGetAllCategoriesQuery, useGetTrendingBooksQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import { useRouter } from "next/router";

function Dashboard() {
    const router = useRouter();

    const {data: categoriesData,loading: categoriesLoading} = useGetAllCategoriesQuery();
    const {data: trendingData, loading: trendingLoading} = useGetTrendingBooksQuery();

    if(categoriesLoading || trendingLoading)
        return (<>Loading...</>)
        
    const onSearch = async (queryString) => {
        await router.push({
            pathname: "/searchResult",
            query: {bookName: queryString, author: queryString, seller: queryString}
        });
    }

    return (
        <MainSection >
            <div className={css["dashboard-root"]}>
                <div className="flex flex-col justify-center items-center w-full h-2/4">
                <div className={css.hero_par}>
                    <div className={clsx([css.hero])}>
                        <div className={css["hero-text"]}>
                            <div>Finding a book</div>
                            <div>was never</div>
                            <div>easier</div>
                        </div>
                        <div>
                            <SearchBar isRedirect={true} onSearch={onSearch} />
                        </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <p className="text-4xl font-bold tracking-wide mb-4 mt-4">Categories</p>
                        <div className={css.category}>
                            {categoriesData?.getAllCategories.map((e)=>
                                <CategoryCard key={e.id} name={e.name} desc={e.description}/> 
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full mt-16">
                        <p className="text-4xl font-bold tracking-wide mb-4">Trending</p>
                        <div className={css.trending}>
                            {trendingData?.getTrendingBooks.map(book => {
                                return <BookCard key={book.bookName} title={book.bookName} description={book.description} />
                            })}
                            
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default withApollo({ ssr: true })(Dashboard);