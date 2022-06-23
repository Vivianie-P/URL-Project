import React from "react";
import "./MainContent.css";
import MainIllustration from "./images/illustration-working.svg";

function MainContent() {
	return (
		<div>
			<div className="main-content">
				<div className="mc-container">
					<div className="img-container">
						<img src={MainIllustration} alt="illustration" className="main-img" />
					</div>
					<div class="full-content">
						<h1 className="mc-title">More than just shorter links</h1>
						<p className="main-ppg">
							{" "}
							Build your brand’s recognition and get detailed insights on how your
							links are performing.
						</p>
						<div className="main-btn-container">
							<button className="main-btn">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainContent;
