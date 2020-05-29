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
		window.location.href = 'http://localhost:3000';
	};

	useEffect(() => {
		if (window.location.href === 'http://localhost:3000/') {
			return;
		} else {
			//may have code attached to url
			const accessToken = localStorage.getItem('access_token');
			const lastSavedTime = localStorage.getItem('last_saved_time');

			//no access token previously stored, retreive code
			if (!accessToken) {
				const searchParams = new URLSearchParams(window.location.search);
				const code = searchParams.get('code');

				if (!code) {
					console.log('no code');
					return;
				}

				const getAccessCode = getOrRenewAccessToken('get', code);
				getAccessCode.then((code) => {
					getUserData(code);
					setLoginShown(false);
				});

				//refreshing token
			} else if (accessToken && Date.now() - lastSavedTime > 28800000) {
				let refreshToken = localStorage.getItem('refresh_token');

				getOrRenewAccessToken('renew', refreshToken);
				console.log('datenow route');
				setLoginShown(false);
			}
		}
	}, []);

	const getUserData = (accessToken) => {
		const config = {
			headers: { Authorization: `Bearer ${accessToken}` },
		};
		console.log('getuserdata function');
		const getProfileData = `https://api.fitbit.com/1/user/-/profile.json`;

		const getLifeTimeData = `https://api.fitbit.com/1/user/-/activities.json`;
		const getActivitiesList = `https://api.fitbit.com/1/user/-/activities/list.json`;
		const getRecentActivites = `https://api.fitbit.com/1/user/-/activities/recent.json`;
		//daily summary includes goals
		const getTodaySummary = `https://api.fitbit.com/1/user/-/activities/date/today.json`;

		// weekly stats for distance/steps
		const get7DaySteps = `https://api.fitbit.com/1/user/-/activities/steps/date/today/7d.json`;
		const requestOne = axios.get(getProfileData, config);
		const requestTwo = axios.get(getLifeTimeData, config);
		const requestThree = axios.get(getTodaySummary, config);
		const requestFour = axios.get(get7DaySteps, config);

		axios
			.all([requestOne, requestTwo, requestThree, requestFour])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responseThree = responses[2];
					const responseFour = responses[3];
					// const responseFour = responses[3];

					setProfileData(responseOne.data.user);
					setLifeTimeData(responseTwo.data.lifetime);
					setDailyActivies(responseThree.data.summary);
					// setRecentActivites(responseFour.data);
					setActivityGoals(responseThree.data.goals);
					setWeeklyStepsData(responseFour.data);
					console.log('weekly distance: ' + responseFour.data);
				})
			)
			.catch((errors) => {
				console.log(errors);
			});
	};

	return (
		<div className='App'>
			{loginShown && <SignIn loginGuestHandler={loginGuestHandler} />}
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
