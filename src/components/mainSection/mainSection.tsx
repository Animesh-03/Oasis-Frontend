import { useGetCurrentUserQuery } from "@/graphql/generated/generated";
import { NetworkStatus } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import css from "./mainSection.module.css";

interface MainSectionProps {
	option?: any,
	children: React.ReactNode
}
const MainSection:  React.FC<MainSectionProps> = ({children}) => {

	const router = useRouter();
	const {loading, data , networkStatus} = useGetCurrentUserQuery();

	

	React.useEffect(() => {
		if(!loading || networkStatus === NetworkStatus.ready)
		{
			if(!data?.getCurrentUser.id) 
			{
				router.replace("/login");
				console.log("Unauthorised");
			}
			else if(router.pathname!="/profile/edit" && !(data?.getCurrentUser.address&&data?.getCurrentUser.fullName&&data?.getCurrentUser.phoneNo))
			{
				router.replace("/profile/edit");
				console.log("Please enter all the details!");
			}
		}


	}, [loading, data, networkStatus]);


	const [sideBarActive, setSideBarActive] = React.useState<boolean>(false);
    const [option, setOption] = React.useState<Number>(2);
    /*
        option : 1 -> profile page 
        option : 2 -> buy (default page)
        option : 3 -> sell
    */

	if(loading || data == undefined)
	{
		return <>Loading...</>
	}

	return (
		<>
			<Navbar sideBarActive = {sideBarActive} setsideBarActive = {setSideBarActive} />
			{<Sidebar sideBarActive={sideBarActive} option={option} setOption={setOption} setSidebarActive={setSideBarActive} />}
			<div className={css.outer}>
				<main className={css.inner}>
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
}

export default MainSection;
