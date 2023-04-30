import MainSection from "@/components/mainSection/mainSection"
import withApollo from "@/apollo/client";
import clsx from "clsx"
import css from "./test.module.css"
import { useRouter } from "next/router";
const ProfilePage: React.FC = () => {
    const router = useRouter();
    const handleClick = async function(e){
        await router.push(e);
    };
    return (
        <div className={css["root"]}>
         <p onClick={(e)=>{handleClick("/analytics")}}>Analytics</p>
         <p onClick={(e)=>{handleClick("/verify")}}>Verify</p>
         <p onClick={(e)=>{handleClick("/details")}}>Details</p>
        </div>
    )
}

export default withApollo({ssr: true})(ProfilePage);
