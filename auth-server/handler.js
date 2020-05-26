'use strict';

const axios = require('axios');
const qs = require('qs');
const config = require('./config');
const FITBIT_OAUTH_URL = 'https://api.fitbit.com/oauth2/token';

module.exports.getAccessToken = async (event) => {
	//fitbit requires id and secret to be concatenated with a colon and in base64
	const baseInfo = new Buffer(`${config.id}:${config.secret}`).toString(
		'base64'
	);

	const data = {
		grant_type: 'authorization_code',
		code: event.pathParameters.code,
		clientId: '22BQSB',
		redirect_uri: 'http://localhost:3000/',
	};

	const info = await axios({
		method: 'post',
		url: FITBIT_OAUTH_URL,
		headers: {
			Authorization: `Basic ${baseInfo}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: qs.stringify(data),
	});

	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			access_token: info.data.access_token,
			refresh_token: info.data.refresh_token,
			expires_in: info.data.expires_in,
			user_id: info.data.user_id,
		}),
	};
};

module.exports.refreshAccessToken = async (event) => {
	const baseInfo = new Buffer(`${config.id}:${config.secret}`).toString(
		'base64'
	);

	const data = {
		grant_type: 'refresh_token',
		refresh_token: event.pathParameters.code,
		redirect_uri: 'http://localhost:3000/',
	};

	const info = await axios({
		method: 'post',
		url: FITBIT_OAUTH_URL,
		headers: {
			Authorization: `Basic ${baseInfo}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: qs.stringify(data),
	});

	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			access_token: info.data.access_token,
			refresh_token: info.data.refresh_token,
			expires_in: info.data.expires_in,
			user_id: info.data.user_id,
		}),
	};
};
