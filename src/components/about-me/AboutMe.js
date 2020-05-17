import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: '70%',
		// margin: '105px',
		backgroundColor: '#03a9f4',
		color: 'black',
		fontSize: '14px',
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

function AboutMe({ profileData }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					Name: {profileData.fullName}
				</Typography>
				<Typography variant='h5' component='h2'></Typography>
				<Typography className={classes.pos} color='textSecondary'>
					DOB: {profileData.dateOfBirth}
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
	);
}
export default AboutMe;
