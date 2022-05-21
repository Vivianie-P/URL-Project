import React from "react";
import { useState } from "react";

function inputValidation() {
	// const inputTextHandler = (e) => {
	// 	setInputText(e.target.value);
	// };

	// const submitTodoHandler = (e) => {
	// 	e.preventDefault();
	// 	setTodos([
	// 		...todos,
	// 		{ text: inputText, completed: false, id: Math.random() * 1000 },
	// 	]);
	// 	setInputText("");
	// };

	// const statusHandler = (e) => {
	// 	setStatus(e.target.value);
	// };

	return (
		<div className="form-container">
			<form action="">
				<div className="primary-main">
					<img src={BackgroundShorten1} alt="" className="mobile-shorten-bg" />
					<img src={BackgroundShorten2} alt="" className="desktop-shorten-bg" />
					<div className="input-btn-container">
						<div className="input-container">
							<input
								type="text"
								className="main-input"
								placeholder="Shorten a link here..."
							/>
						</div>
					</div>
					<div className="button-container">
						<button className="main-btn">Shorten It!</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default inputValidation;
