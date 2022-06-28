import React from "react";
import "./LowerLevelContent.css";
import BrandRecognition from "./images/icon-brand-recognition.svg";
import DetailedRecords from "./images/icon-detailed-records.svg";
import Customizable from "./images/icon-fully-customizable.svg";

function LowerLevelContent() {
	return (
		<div className="ll-container">
			<div className="main">
				<h1 className="title">Advanced Statistics</h1>
				<p className="header-ppg">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
				<div className="ppg-container">
					<div className="desktop-img"></div>
					<div className="first-ppg">
						<img className="first-ppg-img" src={BrandRecognition} alt="" />
						<h1 className="ppg-title">Brand Recognition</h1>
						<p className="ppg">
							Boost your brand recognition with each click. Generic links don’t mean a
							thing. Branded links help instil confidence in your content.
						</p>
					</div>
					<div className="second-ppg">
						<div className="upper-img"></div>
						<img className="second-ppg-img" src={DetailedRecords} alt="" />
						<h1 className="ppg-title">Detailed Records</h1>
						<p className="ppg">
							Gain insights into who is clicking your links. Knowing when and where
							people engage with your content helps inform better decisions.
						</p>
					</div>
					<div className="third-ppg">
						<div className="upper-img"></div>
						<img className="third-ppg-img" src={Customizable} alt="" />
						<h1 className="ppg-title">Fully Customizable</h1>
						<p className="ppg">
							Improve brand awareness and content discoverability through customizable
							links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LowerLevelContent;
