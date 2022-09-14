import "./Navbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavbarData } from "./NavbarData";

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<div className="navbar">
				<nav className="desktop-nav">
					<ul className="nav-menu-items">
						{NavbarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<span>{item.title}</span>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="menu-bars">
					<FontAwesomeIcon icon={faBars} onClick={showSidebar} />
				</div>
			</div>

			<div className="menu-container">
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items">
						{NavbarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<span>{item.title}</span>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
