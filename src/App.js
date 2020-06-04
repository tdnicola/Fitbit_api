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
	//different views
	const [loginShown, setLoginShown] = useState(true);
	const [mainDashInfo, setMainDashInfo] = useState(true);
	const [aboutMeButton, setAboutMeButton] = useState(false);
	const [friendsButton, setfriendsButton] = useState(false);
	const [badgesButton, setBadgesButton] = useState(false);
	const [lifeTimeButton, setLifeTimeButton] = useState(false);

	//Data States
	const [profileData, setProfileData] = useState('');
	const [weeklyStepsData, setWeeklyStepsData] = useState('');
	const [lifeTimeData, setLifeTimeData] = useState('');
	const [dailyActivities, setDailyActivies] = useState('');
	// const [recentActivities, setRecentActivites] = useState('');
	const [friendsData, setFriendsData] = useState('');
	const [activityGoals, setActivityGoals] = useState('');

	//empty array for data to be changed and pushed
	let updatedObjValuesofSteps = [];

	const mainDashHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(true);
		setAboutMeButton(false);
		setLifeTimeButton(false);
		setfriendsButton(false);
		setBadgesButton(false);
	};

	const aboutMeButtonHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(false);
		setBadgesButton(false);
		setfriendsButton(false);
		setLifeTimeButton(false);
		setAboutMeButton(true);
	};

	const friendsButtonHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(false);
		setAboutMeButton(false);
		setBadgesButton(false);
		setLifeTimeButton(false);
		setfriendsButton(true);
	};

	const lifeTimeButtonHandler = (e) => {
		e.preventDefault(e);
		setfriendsButton(false);
		setMainDashInfo(false);
		setAboutMeButton(false);
		setBadgesButton(false);
		setLifeTimeButton(true);
	};

	const badgesButtonHandler = (e) => {
		e.preventDefault();
		setMainDashInfo(false);
		setAboutMeButton(false);
		setfriendsButton(false);
		setLifeTimeButton(false);
		setBadgesButton(true);
	};

	const loginGuestHandler = (e) => {
		e.preventDefault();
		setLoginShown(false);
		setProfileData(mockProfileData.user);
		setLifeTimeData(mockProfileData.lifetime);
		setWeeklyStepsData({
			'activities-steps': mockProfileData['activities-steps'],
		});
		setDailyActivies(mockProfileData.summary);
		setActivityGoals(mockProfileData.goals);
		setFriendsData(mockProfileData.friends);
	};

	const logOutButtonHandler = (e) => {
		e.preventDefault();
		localStorage.clear();
		setLoginShown(true);
		window.location.href = 'https://tdnicola.github.io/Fitbit_api/';
		// window.location.href = 'http://localhost:3000';
	};

	useEffect(() => {
		const accessToken = localStorage.getItem('access_token');
		const lastSavedTime = localStorage.getItem('last_saved_time');

		if (
			!accessToken &&
			window.location.href === 'https://tdnicola.github.io/Fitbit_api/'
		) {
			//local testing
			// if (!accessToken && window.location.href === 'http://localhost:3000/') {
			return console.log('nocode');
		} else if (accessToken && Date.now() - lastSavedTime > 28800000) {
			//Access token not valid
			let refreshToken = localStorage.getItem('refresh_token');

			if (!refreshToken) {
				//missing refresh token, clearing localstorage and start accesstoken route
				localStorage.clear();
				alert('It looks like something is missing. Please try again.');
			}

			//renewing access token
			getOrRenewAccessToken('renew', refreshToken);
			setLoginShown(false);
		} else if (accessToken && Date.now() - lastSavedTime < 28800000) {
			//Usable Access token
			getUserData(accessToken);
			setLoginShown(false);
			console.log('we have the code');
		} else {
			//no access token previously stored, URL is a redirect with code
			if (!accessToken) {
				const searchParams = new URLSearchParams(window.location.search);
				const urlCode = searchParams.get('code');

				if (!urlCode) {
					alert('Something went wrong please try again.');
					return;
				}

				//getting access code and userData
				const getAccessCode = getOrRenewAccessToken('get', urlCode);
				getAccessCode.then((code) => {
					getUserData(code);
					setLoginShown(false);
				});
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
		//FRIENDS
		const getFriendInfo = `https://api.fitbit.com/1.1/user/-/friends.json`;

		// weekly stats for distance/steps
		const get7DaySteps = `https://api.fitbit.com/1/user/-/activities/steps/date/today/7d.json`;
		const requestOne = axios.get(getProfileData, config);
		const requestTwo = axios.get(getLifeTimeData, config);
		const requestThree = axios.get(getTodaySummary, config);
		const requestFour = axios.get(get7DaySteps, config);
		const requestFive = axios.get(getFriendInfo, config);

		axios
			.all([requestOne, requestTwo, requestThree, requestFour, requestFive])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responseThree = responses[2];
					const responseFour = responses[3];
					const responseFive = responses[4];

					setProfileData(responseOne.data.user);
					setLifeTimeData(responseTwo.data.lifetime);
					setDailyActivies(responseThree.data.summary);
					console.log(responseThree.data);
					setActivityGoals(responseThree.data.goals);
					setWeeklyStepsData(responseFour.data);
					console.log(responseFive.data.data);
					setFriendsData(responseFive.data.data);
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
					updatedObjValuesofSteps={updatedObjValuesofSteps}
					badgesButtonHandler={badgesButtonHandler}
					friendsButtonHandler={friendsButtonHandler}
					badgesButton={badgesButton}
					friendsButton={friendsButton}
					friendsData={friendsData}
					lifeTimeButtonHandler={lifeTimeButtonHandler}
					lifeTimeButton={lifeTimeButton}
				/>
			)}
		</div>
	);
}

export default App;
