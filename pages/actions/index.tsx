import React from "react";
import css from "./actions.module.css";
import { GetBuyerTouchesQueryResult } from "@/graphql/generated/generated";
import withApollo from '@/apollo/client';
import MainSection from "@/components/mainSection/mainSection";
import ActionCard from "@/components/action card/actionCard";
import { GetSellerRespondsQueryResult } from "@/graphql/generated/generated";
import { GetBuyerRespondsQueryResult } from "@/graphql/generated/generated";
import { useGetBuyerTouchesLazyQuery } from "@/graphql/generated/generated";
import { useGetSellerRespondsLazyQuery } from "@/graphql/generated/generated";
import { useGetBuyerRespondsLazyQuery } from "@/graphql/generated/generated";

function ActionsPage(){

    // const {data: buyerTouches, loading: buyerTouchesLoading} = useGetBuyerTouchesQuery();
    // const {data: sellerResponds, loading: sellerRespondsLoading} = useGetSellerRespondsQuery();
    // const {data: buyerResponds, loading: buyerRespondsLoading} = useGetBuyerRespondsQuery();

    const [getBuyerTouches] = useGetBuyerTouchesLazyQuery();
    const [getSellerResponds] = useGetSellerRespondsLazyQuery();
    const [getBuyerResponds] = useGetBuyerRespondsLazyQuery();

    const [buyerTouches, setBuyerTouches] = React.useState<GetBuyerTouchesQueryResult>();
    const [sellerResponds, setSellerResponds] = React.useState<GetSellerRespondsQueryResult>();
    const [buyerResponds, setBuyerResponds] = React.useState<GetBuyerRespondsQueryResult>();

    const refreshActionsList = async () => {
        try{
        setBuyerTouches(await getBuyerTouches());
        setSellerResponds(await getSellerResponds());
        setBuyerResponds(await getBuyerResponds());
        }
        catch(e)
        {

        }
    };

    
    React.useEffect(()=>{
        try{
            refreshActionsList();
        }
        catch(ed)
        {

        }
    },[])
    

    if(!(buyerResponds && buyerTouches && sellerResponds))
        return <>Loading...</> 
    if(buyerTouches?.loading || sellerResponds?.loading || buyerResponds?.loading) 
        return <>Loading...</>
    return (
        <MainSection>
            <div className={css["root"]}>
                <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-white">Actions</p>
                <ActionCard onAction={refreshActionsList} actionItems={buyerTouches?.data.getBuyerTouches} type="touch" participant="seller"></ActionCard>
                <ActionCard onAction={refreshActionsList} actionItems={sellerResponds?.data.getSellerResponds} type="respond" participant="buyer"></ActionCard>
                <ActionCard onAction={refreshActionsList} actionItems={buyerResponds?.data.getBuyerResponds} type="confirm" participant="seller"></ActionCard>
            </div>
        </MainSection>
    )
}


export default withApollo({ ssr: true })(ActionsPage);