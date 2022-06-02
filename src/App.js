import "./App.css";
import React from "react";
import NavbarLogo from "./components/images/logo.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./components/MainContent";
import Shortener from "./components/Shortener";
import LowerLevelContent from "./components/LowerLevelContent";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import LinkResult from "./components/LinkResult";

function App() {
	// const fetchShortenUrlData = async (url) => {
	// 	fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
	// 		method: "POST",
	// 	});
	// };

	// let shortUrl = fetchShortenUrlData(
	// 	"https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
	// );
	// console.log(shortUrl);

	return (
		<div className="App">
			<div className="header">
				<div className="mobile-nav">
					<img src={NavbarLogo} alt="main logo" className="navbar-logo" />
					<Router>
						<Navbar />
					</Router>
				</div>
			</div>
			<MainContent />
			<Shortener />
			<LinkResult />
			<LowerLevelContent />
			<Boost />
			<Footer />
		</div>
	);
}

export default App;
