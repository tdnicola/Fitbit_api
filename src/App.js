import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SideBar from './components/SideBar';
import SignIn from './components/SignIn';
import { profileData } from './data/mockData';

function App() {
	const [accessToken, setAccessToken] = useState('1st');
	const [userId, setUserId] = useState('1st');
	const [loginShown, setLoginShown] = useState(true);
	const [userData, setUserData] = useState('');
	const [overAllData, setOverAllData] = useState('');
	const [mainDashInfo, setMainDashInfo] = useState(true);

	const [fakeData, setFakeData] = useState('');

	const mainDashHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(false);
	};

	const loginGuest = (e) => {
		// window.location.href =
		// 	'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';

		e.preventDefault();
		setLoginShown(false);
		setUserData(profileData.user);
		setOverAllData(profileData.overAll);
		console.log('loginShow');
	};

	useEffect(() => {
		if (window.location.href === 'http://localhost:3000/') {
			console.log(fakeData);
		} else {
			const url = window.location.href;
			//getting the access token from url
			const access_token_code = url.split('#')[1].split('=')[1].split('&')[0];
			// get the userid
			const user_Id = url.split('#')[1].split('=')[2].split('&')[0];
			setUserId(user_Id);
			setAccessToken(access_token_code);
			setLoginShown(false);
		}
	}, []);

	const getUserData = (e) => {
		// window.location.href =
		// 	'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
		console.log(accessToken, userId);
		e.preventDefault();

		const config = {
			headers: { Authorization: `Bearer ${accessToken}` },
		};

		const profileData = `https://api.fitbit.com/1/user/${userId}/profile.json`;
		const lifeTimeData = `https://api.fitbit.com/1/user/${userId}/activities.json`;
		//api.fitbit.com/1/user/[user-id]/activities.json
		const activitiesList = `https://api.fitbit.com/1/user/-/activities/list.json`;
		const frequentActivities = `https://api.fitbit.com/1/user/3GTZLF/activities/frequent.json`;
		const recentActivites = `https://api.fitbit.com/1/user/-/activities/recent.json`;
		//daily goals
		const ActiviteGoals = `https://api.fitbit.com/1/user/${userId}/activities/goals/daily.json`;
		axios
			.get(`https://api.fitbit.com/1/user/${userId}/profile.json`, config)
			.then((res) => {
				console.log(res);
			});
	};

	const useGuestData = (e) => {
		e.preventDefault();
		setUserData(profileData.user);
		console.log('hello');
		// const config = {
		// 	headers: { Authorization: `Bearer ${this.state.access_token}` },
		// };

		// axios
		// 	.get(
		// 'https://api.fitbit.com/1/user/[user-id]/profile.json'
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
				<SignIn loginGuest={loginGuest} useGuestData={useGuestData} />
			)}
			{!loginShown && (
				<SideBar
					userData={userData}
					overAllData={overAllData}
					mainDashHandler={mainDashHandler}
					mainDashInfo={mainDashInfo}
				/>
			)}
		</div>
	);
}

export default App;
