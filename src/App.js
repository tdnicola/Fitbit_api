import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SideBar from './components/sidebar/SideBar';
import SignIn from './components/sign-in/SignIn';
import { mockProfileData } from './mockData/mockData';

function App() {
	const [accessToken, setAccessToken] = useState('1st');
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

	const loginGuest = (e) => {
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
			// localStorage.setItem('token', 'access_token_code');
			// localStorage.setItem('user', 'user_Id');
			return;
		} else {
			let accessToken = localStorage.getItem('token');
			if (accessToken === null) {
				const url = window.location.href;
				//getting the access token from url
				const access_token_code = url.split('#')[1].split('=')[1].split('&')[0];
				// get the userid
				const user_Id = url.split('#')[1].split('=')[2].split('&')[0];
				setUserId(user_Id);
				setAccessToken(access_token_code);

				// 	// getUserData(user_Id, access_token_code);

				localStorage.setItem('token', access_token_code);
				localStorage.setItem('user', user_Id);
				setLoginShown(false);
			} else {
				const user_Id = localStorage.getItem('user');
				const access_token_code = localStorage.getItem('token');
				setLoginShown(false);
				getUserData(user_Id, access_token_code);
			}
		}
	}, []);

	const getUserData = (user_Id, access_token_code) => {
		const config = {
			headers: { Authorization: `Bearer ${access_token_code}` },
		};

		const getProfileData = `https://api.fitbit.com/1/user/${user_Id}/profile.json`;
		const getLifeTimeData = `https://api.fitbit.com/1/user/${user_Id}/activities.json`;
		const getActivitiesList = `https://api.fitbit.com/1/user/${user_Id}/activities/list.json`;
		const getFrequentActivities = `https://api.fitbit.com/1/user/${user_Id}/activities/frequent.json`;
		const getRecentActivites = `https://api.fitbit.com/1/user/${user_Id}/activities/recent.json`;
		//daily summary includes goals
		const getActiviteGoals = `https://api.fitbit.com/1/user/${user_Id}/activities/date/today.json`;

		// weekly stats for distance/steps
		// https://api.fitbit.com/1/user/3GTZLF/activities/distance/date/today/7d.json
		const requestOne = axios.get(getProfileData, config);
		const requestTwo = axios.get(getLifeTimeData, config);
		// const requestThree = axios.get(getFrequentActivities, config);
		const requestFour = axios.get(getRecentActivites, config);
		const requestFive = axios.get(getActiviteGoals, config);

		axios
			.all([requestOne, requestTwo, requestFour, requestFive])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responseThree = responses[2];
					const responseFour = responses[3];
					const responseFive = responses[4];

					setProfileData(responseOne.data.user);
					setLifeTimeData(responseTwo.data.lifetime);
					// setFrequentActivities(responseThree.data);
					setRecentActivites(responseFour.data);
					setActivityGoals(responseFive.data);
					console.log(responseOne.data.user.fullName);
				})
			)
			.catch((errors) => {
				console.log(errors);
			});
	};

	return (
		<div className='App'>
			{loginShown && <SignIn loginGuest={loginGuest} />}
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
