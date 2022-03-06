import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../Header.css";

const NavLinks = () => {
	return (
		<div className="col-7 d-flex justify-content-evenly">
			<Link to="/" className="text-decoration-none text-white link">
				HOME
			</Link>
			<Link to="/news" className="text-decoration-none text-white link">
				NEWS
			</Link>
			<Link to="/events" className="text-decoration-none text-white link">
				EVENTS
			</Link>
			<Link to="/world" className="text-decoration-none text-white link">
				WORLD
			</Link>
		</div>
	);
};

export default NavLinks;
