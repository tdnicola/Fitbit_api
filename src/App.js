import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		access_token: 'acces',
		userId: 'id',
	};

	componentDidMount() {
		if (window.location.href === 'http://localhost:3000/') {
			console.log('hello');
		} else {
			const url = window.location.href;
			//getting the access token from url
			const access_token_code = url.split('#')[1].split('=')[1].split('&')[0];
			// get the userid
			const user_Id = url.split('#')[1].split('=')[2].split('&')[0];
			this.setState(
				{
					access_token: access_token_code,
					userId: user_Id,
				},
				function () {
					console.log(this.state);
				}
			);
			// console.log(this.state);
		}
	}

	getSomeData() {
		const config = {
			headers: { Authorization: `Bearer ${this.state.access_token}` },
		};

		axios
			.get(
				`https://api.fitbit.com/1/user/${this.state.userId}/activities.json`,
				config
			)
			.then((res) => {
				console.log(res);
			});
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />

					<a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'>
						Login to Fitbit
					</a>
					<button type='submit' onClick={() => this.getSomeData()}>
						{' '}
						Get some data{' '}
					</button>
				</header>
			</div>
		);
	}
}

export default App;
