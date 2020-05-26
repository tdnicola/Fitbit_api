import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
//Components
import SideBar from './components/sidebar/SideBar';
import SignIn from './components/sign-in/SignIn';
import { getOrRenewAccessToken } from './components/api/api';
//Data for guest
import { mockProfileData } from './mockData/mockData';

function App() {
	const [accessToken, setAccessToken] = useState('');
	const [refreshToken, setRefreshToken] = useState('');
	const [userId, setUserId] = useState('1st');
	const [loginShown, setLoginShown] = useState(true);
	const [mainDashInfo, setMainDashInfo] = useState(true);

	const [profileData, setProfileData] = useState('');
	const [weeklyStepsData, setWeeklyStepsData] = useState('');

	const [lifeTimeData, setLifeTimeData] = useState('');
	const [dailyActivities, setDailyActivies] = useState('');
	const [recentActivities, setRecentActivites] = useState('');
	const [activityGoals, setActivityGoals] = useState('');
	const [aboutMeButton, setAboutMeButton] = useState(false);

	const mainDashHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(true);
	};

	const aboutMeButtonHandler = (e) => {
		e.preventDefault();
		setAboutMeButton(!aboutMeButton);
		setMainDashInfo(false);
	};

	const loginGuestHandler = (e) => {
		e.preventDefault();
		setLoginShown(false);
		setProfileData(mockProfileData.user);
		setLifeTimeData(mockProfileData.lifetime);
		setWeeklyStepsData(mockProfileData['activities-steps']);
		setDailyActivies(mockProfileData.summary);
		setActivityGoals(mockProfileData.goals);
	};

	const logOutButtonHandler = (e) => {
		e.preventDefault();
		localStorage.clear();
		setLoginShown(true);
	};

	useEffect(() => {
		if (window.location.href === 'http://localhost:3000/') {
			return;
		} else {
			let accessToken = localStorage.getItem('access_token');
			const lastSavedTime = localStorage.getItem('last_saved_time');

			if (!accessToken) {
				const searchParams = new URLSearchParams(window.location.search);
				const code = searchParams.get('code');
				getOrRenewAccessToken('get', code);
				console.log(accessToken);
				// const lambdaURL =
				// 	'https://aa1n35yco4.execute-api.us-east-1.amazonaws.com/dev/api/token/' +
				// 	code;

				// // getting token from aws with code from url
				// axios.get(lambdaURL).then((e) => {
				// 	const aws_token = e.data.access_token;
				// 	const aws_refresh = e.data.refresh_token;
				// 	setAccessToken(aws_token);
				// 	setRefreshToken(aws_refresh);
				// 	localStorage.setItem('access_token', aws_token);
				// 	localStorage.setItem('refresh_token', aws_refresh);
				// 	localStorage.setItem('last_saved_time', Date.now());
				// 	setLoginShown(false);
				// });
				// // 	// getUserData(user_Id, access_token_code);

				// localStorage.setItem('access_token', access_token_code);
				// localStorage.setItem('user_id', user_Id);
				setLoginShown(false);
				getUserData();
				console.log('!noaccesstoken route');
			} else if (accessToken && Date.now() - lastSavedTime > 28800000) {
				let refreshToken = localStorage.getItem('refresh_token');

				getOrRenewAccessToken('renew', refreshToken);
				console.log('datenow route');
				setLoginShown(false);

				// const user_Id = localStorage.getItem('user');
				// const access_token_code = localStorage.getItem('token');
				// setLoginShown(false);
				// getUserData(user_Id, access_token_code);
			} else {
				setLoginShown(false);
				getUserData(accessToken);
			}
		}
	}, []);

	const getUserData = (accessToken) => {
		const config = {
			headers: { Authorization: `Bearer ${accessToken}` },
		};

		const getProfileData = `https://api.fitbit.com/1/user/-/profile.json`;

		const getLifeTimeData = `https://api.fitbit.com/1/user/-/activities.json`;
		const getActivitiesList = `https://api.fitbit.com/1/user/-/activities/list.json`;
		const getRecentActivites = `https://api.fitbit.com/1/user/-/activities/recent.json`;
		//daily summary includes goals
		const getTodaySummary = `https://api.fitbit.com/1/user/-/activities/date/today.json`;

		// weekly stats for distance/steps
		// https://api.fitbit.com/1/user/3GTZLF/activities/distance/date/today/7d.json
		const requestOne = axios.get(getProfileData, config);
		const requestTwo = axios.get(getLifeTimeData, config);
		const requestThree = axios.get(getTodaySummary, config);
		const requestFour = axios.get(getRecentActivites, config);

		axios
			.all([requestOne, requestTwo, requestThree])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responseThree = responses[2];
					const responseFour = responses[3];

					setProfileData(responseOne.data.user);
					setLifeTimeData(responseTwo.data.lifetime);
					setDailyActivies(responseThree.data.summary);
					setRecentActivites(responseFour.data);
					setActivityGoals(responseThree.data.goals);
				})
			)
			.catch((errors) => {
				console.log(errors);
			});
	};

	return (
		<div className='App'>
			{loginShown && <SignIn loginGuest={loginGuestHandler} />}
			{!loginShown && (
				<SideBar
					dailyActivities={dailyActivities}
					profileData={profileData}
					lifeTimeData={lifeTimeData}
					mainDashHandler={mainDashHandler}
					mainDashInfo={mainDashInfo}
					aboutMeButtonHandler={aboutMeButtonHandler}
					aboutMeButton={aboutMeButton}
					weeklyStepsData={weeklyStepsData}
					logOutButtonHandler={logOutButtonHandler}
					activityGoals={activityGoals}
				/>
			)}
		</div>
	);
}

export default App;
