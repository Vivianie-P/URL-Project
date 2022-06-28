import React from "react";
import "./Shortener.css";
import { useState, useEffect } from "react";
import BackgroundShorten1 from "./images/bg-shorten-mobile.svg";
import BackgroundShorten2 from "./images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
	let links = localStorage.getItem("links");

	if (links) {
		return JSON.parse(localStorage.getItem("links"));
	} else {
		return [];
	}
};

function Shortener() {
	const [text, setText] = useState("");
	const [links, setLinks] = useState(getLocalStorage());
	const [copyButtonText, SetCopyButtonText] = useState("Copy");

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

	const handleCopy = () => {
		navigator.clipboard.writeText(links.full_short_link);
		SetCopyButtonText("Copied!");
	};

	useEffect(() => {
		localStorage.setItem("links", JSON.stringify(links));
	}, [links]);

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
								// onFocus={(e) => (e.target.placeholder = "")}
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
						<li className="copy-btn-container">
							<button onClick={handleCopy} className="copy-btn">
								{copyButtonText}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Shortener;
