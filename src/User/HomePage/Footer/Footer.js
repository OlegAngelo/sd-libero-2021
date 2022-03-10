import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
	return (
		<div className="mw-100 mx-0">
			<footer className="pb-3 border border-secondary border-3">
				<div className="row justify-content-md-center pt-3">
					<div className="col col-lg-2">
						<h4 className="border-bottom border-2 border-primary w-50 pb-3">
							Rutrum
						</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Fermentum
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Neque
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Consequat
								</Link>
							</li>
						</ul>
					</div>

					<div className="col col-lg-2">
						<h4 className="border-bottom border-2 border-primary w-50 pb-3">
							Malesuada
						</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Tellus
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Condimentum
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Consectetur
								</Link>
							</li>
						</ul>
					</div>

					<div className="col col-lg-2">
						<h4 className="border-bottom border-2 border-primary w-50 pb-3">
							Pallentesque
						</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Habitant
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Morbi
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Tristique
								</Link>
							</li>
						</ul>
					</div>

					<div className="col col-lg-2">
						<h4 className="border-bottom border-2 border-primary w-50 pb-3">
							Quisque
						</h4>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Pharetra
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Volutpat
								</Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-muted">
									Tristique
								</Link>
							</li>
						</ul>
					</div>

					<div className="col col-md-auto">
						<ul>
							<div className="list-inline py-2">
								<input className="blue-circle mx-3" disabled />
								<h3 className="list-inline-item">Phasellus</h3>
							</div>
							<div className="list-inline py-2">
								<input className="blue-circle mx-3" disabled />
								<h3 className="list-inline-item">Augue</h3>
							</div>
							<div className="list-inline py-2">
								<input className="blue-circle mx-3" disabled />
								<h3 className="list-inline-item">Sapien</h3>
							</div>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
