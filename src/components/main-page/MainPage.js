import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BarChart from '../bar-chart/BarChart';

import Badges from '../badges/Badges';
import DailyStats from '../daily-stats/DailyStats';

const useStyles = makeStyles({
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	avatar: {
		justifyContent: 'center',
	},
});

function MainPage({
	profileData,
	weeklyStepsData,
	dailyActivies,
	activitieGoals,
}) {
	const classes = useStyles();

	for (let obj of weeklyStepsData) {
		obj['steps'] = obj['value'];
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				Weekly Steps
				<BarChart
					width={730}
					height={350}
					data={weeklyStepsData}
					xDataKey={'dateTime'}
					barDataKey={'steps'}
					fill={'#8884d8'}
					domain={[0, 20000]}
				/>
				<DailyStats
					dailyActivies={dailyActivies}
					activitieGoals={activitieGoals}
				/>
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
