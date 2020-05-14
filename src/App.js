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

			getUserData(user_Id, access_token_code);
		}
	}, []);

	const getUserData = (user_Id, access_token_code) => {
		// window.location.href =
		// 	'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
		console.log(access_token_code, user_Id);

		const config = {
			headers: { Authorization: `Bearer ${access_token_code}` },
		};

		const profileData = `https://api.fitbit.com/1/user/${user_Id}/profile.json`;
		const lifeTimeData = `https://api.fitbit.com/1/user/${user_Id}/activities.json`;
		//api.fitbit.com/1/user/[user-id]/activities.json
		const activitiesList = `https://api.fitbit.com/1/user/${user_Id}/activities/list.json`;
		const frequentActivities = `https://api.fitbit.com/1/user/${user_Id}/activities/frequent.json`;
		const recentActivites = `https://api.fitbit.com/1/user/${user_Id}/activities/recent.json`;
		//daily goals
		const ActiviteGoals = `https://api.fitbit.com/1/user/${user_Id}/activities/goals/daily.json`;

		const requestOne = axios.get(profileData, config);
		const requestTwo = axios.get(lifeTimeData, config);
		const requestThree = axios.get(frequentActivities, config);
		const requestFour = axios.get(recentActivites, config);
		const requestFive = axios.get(ActiviteGoals, config);

		axios
			.all([requestOne, requestTwo, requestThree, requestFour, requestFive])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responseThree = responses[2];
					const responseFour = responses[3];
					const responseFive = responses[4];

					console.log(
						responseOne,
						responseTwo,
						responseThree,
						responseFour,
						responseFive
					);
				})
			)
			.catch((errors) => {
				console.log(errors);
			});

		// axios
		// 	.get(`https://api.fitbit.com/1/user/${userId}/profile.json`, config)
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
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
				<SignIn
					loginGuest={loginGuest}
					useGuestData={useGuestData}
					getUserData={getUserData}
				/>
			)}
			{/* {!loginShown && (
				<SideBar
					userData={userData}
					overAllData={overAllData}
					mainDashHandler={mainDashHandler}
					mainDashInfo={mainDashInfo}
				/>
			)} */}
		</div>
	);
}

export default App;
