import React from "react";
import "./Shortener.css";
import EmailValidator from "email-validator";
import { useState, useEffect } from "react";
import BackgroundShorten1 from "./images/bg-shorten-mobile.svg";
import BackgroundShorten2 from "./images/bg-shorten-desktop.svg";

function Shortener() {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Input is empty");
		} else {
			const fetchShortenUrlData = async () => {
				const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`, {
					method: "POST",
				});
				const data = await res.json();
				console.log(data);
			};
			fetchShortenUrlData();
		}
	};

	return (
		<div className="form-container">
			<form action="" onSubmit={handleSubmit}>
				<div className="shorten-info-container">
					<img src={BackgroundShorten1} alt="" className="mobile-shorten-bg" />
					<img src={BackgroundShorten2} alt="" className="desktop-shorten-bg" />
					<div className="outter-input-container">
						<div className="input-container">
							<input
								type="text"
								className="input"
								placeholder="Shorten a link here..."
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</div>
					</div>
					<div className="button-container">
						<button className="shorten-btn" onClick={handleSubmit}>
							Shorten It!
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

// const fetchShortenUrlData = async (url) => {
// 	fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
// 		method: "POST",
// 	});
// };

// let shortUrl = fetchShortenUrlData(
// 	"https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
// );
// console.log(shortUrl);

// var validtor = { EmailValidator }.validate("test@email.com");

export default Shortener;
