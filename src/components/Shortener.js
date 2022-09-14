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
	const [links, setLinks] = useState([]);
	const [copyButtonText, SetCopyButtonText] = useState("Copy");
	const [emptyInputError, setemptyInputError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			setemptyInputError(true);
		} else {
			const fetchShortenUrlData = async () => {
				const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`, {
					method: "POST",
				});
				const data = await res.json();
				const tempLinks = [...links, data.result];
				console.log(data.result);
				setLinks(tempLinks);
				setText("");
				localStorage.setItem("links", JSON.stringify(tempLinks));
			};
			fetchShortenUrlData();
		}
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(links.full_short_link);
		SetCopyButtonText("Copied!");
	};

	useEffect(() => {
		setLinks(getLocalStorage());
	}, []);

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
								className={emptyInputError ? "emptyInput" : "input"}
								placeholder="Shorten a link here..."
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							{emptyInputError && (
								<div className="inputErrorMessageContainerMobile">
									<h2 className="inputErrorMessageMobile">Please add a link</h2>
								</div>
							)}
							<button className="shorten-it-btn" onClick={handleSubmit}>
								Shorten It!
							</button>
						</div>
						{emptyInputError && (
							<div className="inputErrorMessageContainerDesktop">
								<h2 className="inputErrorMessageDesktop">Please add a link</h2>
							</div>
						)}
					</div>
				</div>
			</form>

			<div className="full-links">
				{links.length > 0
					? links.map((link) => (
							<div className="link">
								<div className="original-link">
									<h3>{link.original_link}</h3>
								</div>
								<div className="shortened-link-and-btn">
									<a className="shortened-link" href={link.full_short_link}>
										{link.full_short_link}
									</a>
									<button onClick={handleCopy} className="copy-btn">
										{copyButtonText}
									</button>
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
}

export default Shortener;
