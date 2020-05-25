'use strict';

const axios = require('axios');
const qs = require('qs');
const config = require('./config');

module.exports.getAccessToken = async (event) => {
	const baseInfo = new Buffer(`${config.id}:${config.secret}`).toString(
		'base64'
	);

	const MEETUP_OAUTH_URL = 'https://api.fitbit.com/oauth2/token';
	const data = {
		grant_type: 'authorization_code',
		code: event.pathParameters.code,
		clientId: '22BQSB',
		redirect_uri: 'http://localhost:3000/',
	};

	const info = await axios({
		method: 'post',
		url: MEETUP_OAUTH_URL,
		headers: {
			Authorization: `Basic ${baseInfo}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: qs.stringify(data),
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			access_token: info.data.access_token,
			refresh_token: info.data.refresh_token,
		}),
	};
};
