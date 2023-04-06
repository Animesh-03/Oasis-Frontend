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
import { useGetAllCategoriesQuery, useGetTrendingBooksQuery } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import dashboard from "pages/dashboard";
import Advert from "@/components/advert/advert";

function Test() {
    return <MainSection><div id={css["root"]}>
        <div className={css["section"]}>
        <h1>Book Details</h1>
            <Advert title="The New Fall" author="Linda Martin" desc = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus lorem id lacus sagittis, condimentum luctus neque semper. Etiam molestie dignissim dui quis scelerisque. Sed viverra nulla velit, ac venenatis ex interdum et. Phasellus nec lacinia dolor. Nullam consectetur imperdiet nunc, ut rutrum velit venenatis ac. Nulla congue, turpis non ornare luctus, lacus nibh ultrices velit, ac consectetur nulla leo maximus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget dui in orci tristique commodo. Morbi eget sapien sapien. Aliquam ornare congue arcu, tristique tristique tellus laoreet at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ultricies a lacus sit amet iaculis. Quisque fermentum odio in mi hendrerit, in lacinia orci dictum. Nulla facilisi. Ut consectetur ex sit amet lacus convallis, nec iaculis quam hendrerit. Nunc tristique justo enim, quis iaculis nisi tincidunt vel.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus malesuada tempor luctus. Duis consectetur metus sed vulputate venenatis. Donec eget risus luctus, fringilla sapien luctus, maximus turpis. Curabitur molestie iaculis tellus et vehicula. Mauris orci lorem, lobortis a sapien vel, accumsan tristique nibh. Duis non orci odio.`}
 price="20$" seller = "NewTech Media"></Advert>
        </div>

        <div className={css["similar"]}> 
        <h1>More books</h1>
        <div className={css["scroll"]}>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>

            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            <BookCard title="demo"></BookCard>
            </div></div>
        </div></MainSection>
}

export default withApollo({ ssr: true })(Test);