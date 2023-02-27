import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: start;
    align-items: center;
    width: 20vw;
    background: rgba(211, 212, 212, 0.16);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    // border: 1px solid rgba(132, 123, 123, 0.3);
	transform: "translateX(-100%)" : "translateX(0)";
	height: 100vh;
	position: fixed;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10vh;
	top: 0;
	left: 0;
	z-index: 1;
	transition: transform 5s ease-in-out;
	div {        
		font-size: 1.5rem;
		text-transform: uppercase;
		// font-weight: bold;
		letter-spacing: 0.35em;
		color: #000000;
		text-decoration: none;
		transition: color 0.3s linear;
        padding-top:20px;
        		&:hover {
                    cursor: pointer;
			color: #ff0000;
		}
		margin-top: 10px;
	}
`;

function Sidebar({ option, setOption, setsideBarActive }) {
	const handleClick = (val) => {
		setOption(val);
		setsideBarActive(false);
	};
	return (
		<>
			<StyledMenu open={open}>
				<div onClick={() => handleClick(1)}>
					{/* <HiOutlineHome style={{ color: "red" }} /> */}
					Profile
				</div>
				<div onClick={() => handleClick(2)}>
					{/* <FiMic style={{ color: "red" }} /> */}
					Buy
				</div>
				<div onClick={() => handleClick(3)}>
					{/* <HiOutlineUserGroup style={{ color: "red" }} /> */}
					SELL
				</div>
			</StyledMenu>
		</>
	);
}

export default Sidebar;
