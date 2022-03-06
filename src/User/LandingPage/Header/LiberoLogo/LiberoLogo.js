import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../Header.css";
import liberologo from "./img/liberologo.png";

const LiberoLogo = () => {
	return (
		<div className="col-3 d-flex justify-content-evenly">
			<FontAwesomeIcon icon={faBars} className="menuLogo" />

			<img src={liberologo} />
		</div>
	);
};

export default LiberoLogo;
