import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../Header.css";
import liberologo from "./img/liberologo.png";

const LiberoLogo = () => {
	return (
		<div className="col-4 d-flex justify-content-end">
			<FontAwesomeIcon icon={faBars} className="menuLogo" />

			<img src={liberologo} className="mx-5" />
		</div>
	);
};

export default LiberoLogo;
