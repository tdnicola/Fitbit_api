import React from 'react';
import { Button } from '@material-ui/core';

export default ({ getSomeData, loginView }) => (
	<div className='loginView'>
		<div className='fitBitLogin'>
			<Button color='primary' onClick={(e) => loginView(e)}>
				<a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'>
					Login to Fitbit
				</a>
			</Button>
		</div>
		<div className='guestLogin'>
			<Button
				type='button'
				color='primary'
				onClick={(e) => {
					loginView(e);
				}}
			>
				Login as Guest
			</Button>
			<Button type='button' color='primary'>
				Primary
			</Button>
		</div>
		{/* <button type='submit' onClick={() => getSomeData()}>
			Get some data
		</button> */}
	</div>
);
