import axios from 'axios';

async function getOrRenewAccessToken(type, code) {
	let url;
	if (type === 'get') {
		// Lambda endpoint to get token by code
		url =
			'https://aa1n35yco4.execute-api.us-east-1.amazonaws.com/dev/api/token/' +
			code;
	} else if (type === 'renew') {
		// Lambda endpoint to get token by refresh_token
		url =
			'https://aa1n35yco4.execute-api.us-east-1.amazonaws.com/dev/api/refresh/' +
			code;
	}

	// Use Axios to make a GET request to the endpoint
	const tokenInfo = await axios.get(url);

	// Save tokens to localStorage together with a timestamp
	localStorage.setItem('access_token', tokenInfo.data.access_token);
	localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
	localStorage.setItem('last_saved_time', Date.now());
	return tokenInfo.data.access_token;
}
export { getOrRenewAccessToken };
