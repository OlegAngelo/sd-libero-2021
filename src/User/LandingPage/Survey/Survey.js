import React from "react";

const Survey = () => {
	return (
		<div>
			<form>
				<div>How do you feel about recycling ?</div>
				<div className="form-group">
					<label for="postcode">Postcode:</label>
					<input
						type="tel"
						class="form-control"
						id="postcode"
						placeholder="6000"
					/>
				</div>

				<div>
					Should the government start enforcing garbage separation and recycling
					schemes across your area?
				</div>

				<div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios1"
							value="option1"
							checked
						/>
						<label class="form-check-label" for="yes">
							Yes
						</label>
					</div>

					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
						/>
						<label class="form-check-label" for="no">
							No
						</label>
					</div>

					<button type="submit" className="btn btn-primary mb-2">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Survey;
