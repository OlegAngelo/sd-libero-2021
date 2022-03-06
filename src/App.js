import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./User/LandingPage/LandingPage.js";
import NewsPage from "./User/News/NewsPage.js";
import EventsPage from "./User/Events/EventsPage.js";
import WorldPage from "./User/World/WorldPage.js";
import Header from "./User/LandingPage/Header/Header.js";

const App = () => {
	return (
		<div className="w-full">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<LandingPage />} />
					<Route path="/news" exact element={<NewsPage />} />
					<Route path="/events" exact element={<EventsPage />} />
					<Route path="/world" exact element={<WorldPage />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
