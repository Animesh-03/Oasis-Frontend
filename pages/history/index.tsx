import ActionCard from "@/components/action card/actionCard"
import MainSection from "@/components/mainSection/mainSection"
import css from "./history.module.css"
import { useGetBuyerHistoryQuery, useGetSellerHistoryQuery } from "@/graphql/generated/generated"
import withApollo from "@/apollo/client"
import BuyerHistoryItem from "@/components/buyer history item/buyerHistoryItem"
import HistoryCard from "@/components/history card/historyCard"

const History: React.FC = () => {

    const {data:buyerHistory, loading: buyerHistoryLoading} = useGetBuyerHistoryQuery();
    const {data: sellerHistory, loading: sellerHistoryLoading} = useGetSellerHistoryQuery();

    if(buyerHistoryLoading || sellerHistoryLoading) return <>Loading...</>

    return (
        <MainSection>
            <div className={css["root"]}>
                <p className="text-4xl font-bold tracking-wide mb-4 mt-4 text-white">History</p>
                <HistoryCard type="purchase" historyItems={buyerHistory.getBuyerHistory} />
                <HistoryCard type="sale" historyItems={sellerHistory.getSellerHistory} />
            </div>
        </MainSection>
    )
}

export default withApollo({ssr: true})(History);