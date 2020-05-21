import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BarChart from '../bar-chart/BarChart';
import Grid from '@material-ui/core/Grid';

// Components
import StatsCard from '../stats-card/StatsCard';
import Badges from '../badges/Badges';
import DailyStats from '../daily-stats/DailyStats';

//SVG IMAgES
import distance from '../../images/noun_distance_939669.svg';
import stairs from '../../images/noun_steps_249968.svg';
import steps from '../../images/noun_steps_3105633.svg';

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
	dailyActivities,
	activityGoals,
}) {
	const classes = useStyles();

	for (let obj of weeklyStepsData) {
		obj['steps'] = obj['value'];
	}

	//find the daily distance in the array of distances
	const dailyDistance = dailyActivities.distances.find(
		(x) => x.activity === 'total'
	);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				Today's Info:
				<Grid container spacing={2}>
					<Grid item xs={4} spacing={1}>
						<StatsCard
							title={"Today's Steps: "}
							data={dailyActivities.steps}
							logo={steps}
						/>
					</Grid>
					<Grid item xs={4} spacing={1}>
						<StatsCard
							title={"Today's Floors: "}
							data={dailyActivities.floors}
							logo={stairs}
						/>
					</Grid>
					<Grid item xs={4} spacing={1}>
						<StatsCard
							title={"Today's Distance: "}
							data={dailyDistance.distance}
							logo={distance}
						/>
					</Grid>
				</Grid>
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
					dailyActivities={dailyActivities}
					activityGoals={activityGoals}
				/>
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
