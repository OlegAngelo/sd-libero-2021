import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

import LiberoLogo from "./LiberoLogo/LiberoLogo.js";
import NavLinks from "./NavLinks/NavLinks.js";

const Header = () => {
	return (
		<div className="py-5 header">
			<div className="row">
				<LiberoLogo />

				<NavLinks />

				<div className="col-2 d-flex justify-content-center searchIcon">
					<SearchIcon />
				</div>
			</div>
		</div>
	);
};

export default Header;
