import React, { useState, useEffect } from "react";

import Api from "../../apis/Api";

const NewsPage = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	Api.fetchNews().then((data) => {
	// 		const newsData = data.data.results;
	// 		setNews(newsData);
	// 		setIsLoading(false);
	// 	});
	// }, []);

	return <div className="container">News page</div>;
};

export default NewsPage;
