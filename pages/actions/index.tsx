import IconButton from "@/components/icon-buttons/icon-button";
import React from "react";
import css from "./actions.module.css";
import { Input } from "@/components/input/input";
import clsx from "clsx";
import Button from "@/components/button/button";
import { useLoginUserMutation, useRegisterUserMutation } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import MainSection from "@/components/mainSection/mainSection";
import ActionCard from "@/components/action card/actionCard";

function ActionsPage(){
    return (
        <MainSection>
            <div className={css["root"]}>
                <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-white">Actions</p>
                <ActionCard type="touch" participant="seller"></ActionCard>
                <ActionCard type="respond" participant="buyer"></ActionCard>
                <ActionCard type="confirm" participant="buyer"></ActionCard>
            </div>
        </MainSection>
    )
}


export default withApollo({ ssr: true })(ActionsPage);