import IconButton from "@/components/icon-buttons/icon-button";
import React from "react";
import css from "./actions.module.css";
import { Input } from "@/components/input/input";
import clsx from "clsx";
import Button from "@/components/button/button";
import { useGetBuyerRespondsQuery, useGetBuyerTouchesQuery, useGetSellerRespondsQuery, useLoginUserMutation, useRegisterUserMutation } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import MainSection from "@/components/mainSection/mainSection";
import ActionCard from "@/components/action card/actionCard";

function ActionsPage(){

    const {data: buyerTouches, loading: buyerTouchesLoading} = useGetBuyerTouchesQuery();
    const {data: sellerResponds, loading: sellerRespondsLoading} = useGetSellerRespondsQuery();
    const {data: buyerResponds, loading: buyerRespondsLoading} = useGetBuyerRespondsQuery();

    if(buyerTouchesLoading || sellerRespondsLoading || buyerRespondsLoading) return <>Loading...</>

    return (
        <MainSection>
            <div className={css["root"]}>
                <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-white">Actions</p>
                <ActionCard actionItems={buyerTouches.getBuyerTouches} type="touch" participant="seller"></ActionCard>
                <ActionCard actionItems={sellerResponds.getSellerResponds} type="respond" participant="buyer"></ActionCard>
                <ActionCard actionItems={buyerResponds.getBuyerResponds} type="confirm" participant="seller"></ActionCard>
            </div>
        </MainSection>
    )
}


export default withApollo({ ssr: true })(ActionsPage);