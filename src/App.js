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

function App() {
	return (
		<div className="App">
			<div className="header">
				<div className="full-nav">
					<img src={NavbarLogo} alt="main logo" className="navbar-logo" />
					<Router>
						<Navbar />
					</Router>
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
