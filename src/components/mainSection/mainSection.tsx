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
	const [sideBarActive, setSideBarActive] = React.useState<boolean>(false);
    const [option, setOption] = React.useState<Number>(2)
    /*
        option : 1 -> profile page 
        option : 2 -> buy (default page)
        option : 3 -> sell
    */

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
