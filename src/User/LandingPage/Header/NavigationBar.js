import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";

const NavigationBar = () => {
	return (
		<div className="container py-5">
			<div className="d-flex justify-content-around">
				<div>Libero</div>

				<Router>
					<Link to="/" className="text-decoration-none">
						HOME
					</Link>
					<Link to="/news" className="text-decoration-none">
						NEWS
					</Link>
					<Link to="/events" className="text-decoration-none">
						EVENTS
					</Link>
					<Link to="/world" className="text-decoration-none">
						WORLD
					</Link>
				</Router>

				<div>
					<SearchIcon />
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
