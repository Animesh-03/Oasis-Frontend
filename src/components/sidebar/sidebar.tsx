import clsx from "clsx";
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
	const handleClick = (val: number) => {
		setOption(val);
		setSidebarActive(false);
	};


	return (
		<>
			<div className={clsx([css.root, sideBarActive && css.active])}>
				<div onClick={() => handleClick(1)}>
					Profile
				</div>
				<div onClick={() => handleClick(2)}>
					Buy
				</div>
				<div onClick={() => handleClick(3)}>
					SELL
				</div>
			</div>
		</>
	);
}

export default Sidebar;
