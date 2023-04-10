import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import css from "./sidebar.module.css"

interface SiderbarProps {
	option: Number,
	setOption: Function,
	sideBarActive: boolean,
	setSidebarActive: Function,
}

const Sidebar: React.FC<SiderbarProps> = ({ option, setOption, setSidebarActive, sideBarActive }) => {
	const router = useRouter();

	const handleClick = async (val: number, redir: string) => {
		setOption(val);
		setSidebarActive(false);
		await router.push(redir);
	};


	return (
		<>
			<div className={clsx([css.root, sideBarActive && css.active])}>
				<div onClick={() => handleClick(3, "/postAd")}>
					SELL
				</div>
				<div onClick={() => handleClick(1, "/profile/edit")}>
					Profile
				</div>
				<div onClick={() => handleClick(3, "/actions")}>
					Actions
				</div>
				<div onClick={() => handleClick(3, "/history")}>
					History
				</div>
				<div onClick={() => handleClick(3, "/dashboard")}>
					Dashboard
				</div>
				{/* <div onClick={() => handleClick(3, "/advertisement")}>
					test
				</div> */}
			</div>
		</>
	);
}

export default Sidebar;
