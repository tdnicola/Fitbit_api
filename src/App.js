import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import LoginView from './components/LoginView';
import Sidebar from './components/SideBar';
import { Button } from '@material-ui/core';

function App() {
	const [accessToken, setAccessToken] = useState('');
	const [userId, setUserid] = useState('');
	const [loginShown, setLoginShown] = useState(true);

	const loginView = (e) => {
		e.preventDefault();
		setLoginShown(false);
		console.log('loginShow');
	};

	useEffect(() => console.log('mounted!'), []);
	// componentDidMount() {
	// 	if (window.location.href === 'http://localhost:3000/') {
	// 		console.log('hello');
	// 	} else {
	// 		const url = window.location.href;
	// 		//getting the access token from url
	// 		const access_token_code = url.split('#')[1].split('=')[1].split('&')[0];
	// 		// get the userid
	// 		const user_Id = url.split('#')[1].split('=')[2].split('&')[0];
	// 		this.setState(
	// 			{
	// 				access_token: access_token_code,
	// 				userId: user_Id,
	// 			},
	// 			function () {
	// 				console.log(this.state);
	// 			}
	// 		);
	// 		// console.log(this.state);
	// 	}
	// }

	const getSomeData = () => {
		console.log('hello');
		// const config = {
		// 	headers: { Authorization: `Bearer ${this.state.access_token}` },
		// };

		// axios
		// 	.get(
		// 		`https://api.fitbit.com/1/user/${this.state.userId}/activities.json`,
		// 		config
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
	};

	return (
		<div className='App'>
			{loginShown && (
				<LoginView getSomeData={getSomeData} loginView={loginView} />
			)}
			{!loginShown && <Sidebar />}
		</div>
	);
}

export default App;
