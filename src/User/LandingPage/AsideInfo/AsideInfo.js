import React from "react";

import "./AsideInfo.css";

const AsideInfo = () => {
	return (
		<aside>
			<div className="aside-container">
				<div>
					<h1 class="text-design aside__heading-text">
						Phasellus augue sapien
					</h1>
				</div>

				<div class="border-line"></div>

				<div class="aside-img1">
					<p class="text-design img-text py-5 text-light">
						Vestibulum sit amet tempor orci
					</p>

					<a href="#" class="readMore-link">
						{"Read more >>"}
					</a>
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

					<a href="/" class="readMore-link">
						{"Read more >>"}
					</a>
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
