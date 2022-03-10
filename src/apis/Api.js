import axios from "axios";

const Api = {
	fetchNews: () => {
		const apiKey = "pub_53520be32aefb0dc9c384dee2e23585f3372";

		axios
			.get(`https://newsdata.io/api/1/news?apikey=${apiKey}`)
			.then((response) => response.json().then((data) => console.log(data)))
			.catch((err) => console.error(err));
	},
};

export default Api;
