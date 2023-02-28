import React, { ReactNode } from "react";
import css from "./navbar.module.css";
import { RiLogoutCircleLine } from "react-icons/ri";
import OasisLogo from "../oasis logo/oasisLogo";

interface NavBarProps {
	sideBarActive: boolean,
	setsideBarActive: Function
}

const Navbar: React.FC<NavBarProps> = ({ sideBarActive, setsideBarActive }) => {
	const handleClick = () => {
		setsideBarActive(!sideBarActive);
	};
	return (
		<>
			<div className={css["navbar"]}>
				<div className="flex flex-row">
					<div className={css["sideHam"]} onClick={() => handleClick()}>
						<div className={sideBarActive ? css.sideHam1 : null}></div>
						<div className={sideBarActive ? css.sideHam2 : null}></div>
						<div className={sideBarActive ? css.sideHam3 : null}></div>
					</div>
					<div className="ml-20 z-10">
						<OasisLogo weight="bold"/>
					</div>
				</div>
				
				<div>
				</div>
				<div className={css["logout"]}>
					<RiLogoutCircleLine className={css["logout-icon"]} color={"red"} />
				</div>
			</div>
		</>
	);
}

export default Navbar;
