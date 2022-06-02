import React from "react";
// import "/.LinkResult.css";
import { useState } from "react";

function LinkResult() {
	const [shortenLink, setShortenLink] = useState("");

	return (
		<div className="result">
			<p>{shortenLink}</p>
			<button>Copy</button>
		</div>
	);
}

export default LinkResult;
