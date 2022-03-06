import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

import Survey from "./Survey/Survey.js";
import AsideInfo from "./AsideInfo/AsideInfo.js";

const LandingPage = () => {
	return (
		<div className="container d-flex justify-content-evenly py-5">
			<Survey />

			<div className="v-line" />

			<AsideInfo />
		</div>
	);
};

export default LandingPage;
