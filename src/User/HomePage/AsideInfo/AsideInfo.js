import React from "react";
import { Link } from "react-router-dom";

import "./AsideInfo.css";

const AsideInfo = () => {
	return (
		<aside>
			<div className="aside-container">
				<div>
					<h1 class="text-design aside__heading-text">Worldwide Events</h1>
				</div>

				<div class="border-line"></div>

				<div class="aside-img1">
					<p class="text-design img-text py-5 text-light">
						Vestibulum sit amet tempor orci
					</p>

					<Link to="/events" class="readMore-link">
						{"Read more >>"}
					</Link>
				</div>

				<div>
					<p class="text-design small-text">
						Phasellus augue sapien, spanaliquam sit amet mauris
					</p>
				</div>

				<div class="border-line"></div>

				<div class="aside-img2">
					<p class="text-design img-text py-5 text-light">
						Integer consectetur orci ligula
					</p>

					<Link to="/events" class="readMore-link">
						{"Read more >>"}
					</Link>
				</div>

				<div>
					<p class="text-design small-text">
						Sed facilisis volutpat <br />
						turpis eu viverra
					</p>
				</div>
			</div>
		</aside>
	);
};

export default AsideInfo;
