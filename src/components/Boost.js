import React from "react";
import "./Boost.css";
import BGBoost1 from "./images/bg-boost-mobile.svg";
import BGBoost2 from "./images/bg-boost-desktop.svg";

function Boost() {
	return (
		<div>
			<div className="boost-main">
				<img src={BGBoost1} alt="" className="mobile-boost-bg" />
				<img src={BGBoost2} alt="" className="desktop-boost-bg" />
				<div className="boost-title-container">
					<h1 className="boost-title">Boost your links today</h1>
				</div>
				<div className="boost-btn-container">
					<button className="boost-btn">Get Started</button>
				</div>
			</div>
		</div>
	);
}

export default Boost;
