import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Survey.css";

const Survey = () => {
	return (
		<div>
			<form>
				<div className="main__heading-text">
					How do you feel about recycling ?
				</div>
				<div className="mx-5">
					<div>
						<label for="postcode" className="text-design mt-4">
							Postcode:
						</label>
						<br />
						<input type="tel" className="postcode-input" id="postcode" />
					</div>

					<div className="text-design">
						<p className="mt-5">
							Should the government start enforcing <br />
							garbage separation and recycling schemes <br />
							across your area?
						</p>
					</div>

					<div>
						<div className="custom-radio">
							<input
								className="form-check-input"
								type="radio"
								name="yesNoBtn"
								id="yes"
								checked
							/>
							<label for="yes" className="radio-text">
								Yes
							</label>
						</div>

						<div className="custom-radio">
							<input
								className="form-check-input"
								type="radio"
								name="yesNoBtn"
								id="no"
							/>
							<label for="no" className="radio-text">
								No
							</label>
						</div>

						<button type="submit" className="btn rounded-pill submit-btn">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Survey;
