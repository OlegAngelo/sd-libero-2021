import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

import LiberoLogo from "./LiberoLogo/LiberoLogo.js";
import NavLinks from "./NavLinks/NavLinks.js";

const Header = () => {
	return (
		<div className="py-5 header mb-5">
			<div className="row">
				<LiberoLogo />

				<NavLinks />

				<div className="col-2 d-flex justify-content-end searchIcon">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</div>
		</div>
	);
};

export default Header;
