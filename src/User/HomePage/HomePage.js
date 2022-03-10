import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

import Survey from "./Survey/Survey.js";
import AsideInfo from "./AsideInfo/AsideInfo.js";

const HomePage = () => {
	return (
		<div className="container d-flex justify-content-evenly py-5">
			<Survey />

			<div className="v-line" />

			<AsideInfo />
		</div>
	);
};

export default HomePage;
