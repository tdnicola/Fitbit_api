import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BarChart from '../charts/BarChart';
import Grid from '@material-ui/core/Grid';

// Components
import StatsCard from '../stats-card/StatsCard';
import DailyStats from '../daily-stats/DailyStats';
import PieChart from '../charts/PieChart';

//SVG IMAGES
import distance from '../../images/noun_distance_939669.svg';
import stairs from '../../images/noun_steps_249968.svg';
import steps from '../../images/noun_steps_3105633.svg';

function MainPage({
	profileData,
	weeklyStepsData,
	dailyActivities,
	activityGoals,
	// updatedObjValuesofSteps,
}) {
	// const classes = useStyles();

	let updatedObjValuesofSteps = [];
	if (weeklyStepsData) {
		weeklyStepsData['activities-steps'].map((e) => {
			e = {
				steps: e.value,
				dateTime: e.dateTime,
			};
			updatedObjValuesofSteps.push(e);
		});
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
					<Grid item xs={4}>
						<StatsCard
							title={"Today's Steps: "}
							data={dailyActivities.steps}
							logo={steps}
						/>
					</Grid>
					<Grid item xs={4}>
						<StatsCard
							title={"Today's Floors: "}
							data={dailyActivities.floors}
							logo={stairs}
						/>
					</Grid>
					<Grid item xs={4}>
						<StatsCard
							title={"Today's Distance: "}
							data={dailyDistance.distance}
							logo={distance}
						/>
					</Grid>
				</Grid>
				<DailyStats
					dailyActivities={dailyActivities}
					activityGoals={activityGoals}
					dailyDistance={dailyDistance}
				/>
				Weekly Steps
				<BarChart
					width={730}
					height={350}
					data={updatedObjValuesofSteps}
					xDataKey={'dateTime'}
					barDataKey={'steps'}
					fill={'#8884d8'}
					domain={[0, 20000]}
				/>
				<PieChart />
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
