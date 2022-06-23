import React from "react";
import "./Shortener.css";
import { useState, useEffect } from "react";
import BackgroundShorten1 from "./images/bg-shorten-mobile.svg";
import BackgroundShorten2 from "./images/bg-shorten-desktop.svg";

function Shortener() {
	const [text, setText] = useState("");
	const [links, setLinks] = useState([]);

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
				console.log(data.result);
				setLinks(data.result);
				setText("");
			};
			fetchShortenUrlData();
		}
	};

	return (
		<div className="container">
			<form className="form-container" action="" onSubmit={handleSubmit}>
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
							<button className="shorten-it-btn" onClick={handleSubmit}>
								Shorten It!
							</button>
						</div>
					</div>
				</div>
			</form>

			<div className="full-links">
				<div className="original-link">
					<h3>{links.original_link}</h3>
				</div>
				<div className="shortened-link-and-btn">
					<ul className="list">
						<li>
							<button className="shortened-link">{links.full_short_link}</button>
						</li>
						<li className="shortened-btn-container">
							<button className="shortened-btn">Copy</button>
						</li>
					</ul>
				</div>
			</div>
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
