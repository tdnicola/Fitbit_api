import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

// components
import LifeTimeData from '../lifetime-data/LifeTimeData';

const useStyles = makeStyles({
	root: {
		width: '70%',
		// margin: '105px',
		backgroundColor: '#3399CC',
		color: 'black',
		fontSize: '14px',
		marginLeft: 75,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function AboutMe({ profileData, lifeTimeData }) {
	const classes = useStyles();

	return (
		<div>
			<LifeTimeData lifeTimeData={lifeTimeData} />
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar
							aria-label='avatar'
							className={classes.avatar}
							src={profileData.avatar640}
						/>
					}
					title={profileData.fullName}
					subheader={'Member Since: ' + profileData.memberSince}
				/>
				<CardContent>
					<Typography variant='h5' component='h2'></Typography>
					<Typography className={classes.pos} color='textSecondary'>
						Birthday: {profileData.dateOfBirth}
						<br />
						gender: {profileData.gender}
						<br />
						height: {profileData.height}
						<br />
						weight: {profileData.weight}
						<br />
						average daily steps: {profileData.averageDailySteps}
					</Typography>
					<Typography variant='body2' component='p'>
						timezone: {profileData.timezone}
						<br />
						member since: {profileData.memberSince}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
export default AboutMe;
