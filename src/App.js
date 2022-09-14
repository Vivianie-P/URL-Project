import "./App.css";
import React from "react";
import NavbarLogo from "./components/images/logo.svg";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Shortener from "./components/Shortener";
import LowerLevelContent from "./components/LowerLevelContent";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div className="full-nav">
					<img src={NavbarLogo} alt="main logo" className="navbar-logo" />
					<Navbar />
				</div>
			</div>
			<MainContent />
			<Shortener />
			<LowerLevelContent />
			<Boost />
			<Footer />
		</div>
	);
}

export default App;
