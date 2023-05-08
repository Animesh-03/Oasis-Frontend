import React from "react";
import css from "./advertisement.module.css"
import MainSection from "@/components/mainSection/mainSection"
import BookCard from "@/components/book card/bookCard";
import { useGetAdvertisementQuery, useGetTrendingBooksQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
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
                <Advert id={router.query.id as string} title={data.getAdvertisement.book.bookName} author={data.getAdvertisement.book.authorName} desc={data.getAdvertisement.book.description}
                    price={data.getAdvertisement.price} seller={data.getAdvertisement.seller.fullName} image={data.getAdvertisement.images[0]}></Advert>
            </div>

            <div className={css["similar"]}>
                <h1>More books</h1>
                <div className={css["scroll"]}>
                    {trendingData?.getTrendingBooks.map(book => {
                        return <BookCard key={book.bookName} title={book.bookName} description={book.description} imageURL={book.advertisements[0].images[0]}/>
                    })}
                </div>
            </div>
        </div>
    </MainSection>
}

export default withApollo({ ssr: true })(Test);