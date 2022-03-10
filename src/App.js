import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./User/HomePage/HomePage.js";
import NewsPage from "./User/News/NewsPage.js";
import EventsPage from "./User/Events/EventsPage.js";
import WorldPage from "./User/World/WorldPage.js";
import Header from "./User/HomePage/Header/Header.js";
import Footer from "./User/HomePage/Footer/Footer.js";

const App = () => {
	return (
		<div className="w-full">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<HomePage />} />
					<Route path="/news" exact element={<NewsPage />} />
					<Route path="/events" exact element={<EventsPage />} />
					<Route path="/world" exact element={<WorldPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
