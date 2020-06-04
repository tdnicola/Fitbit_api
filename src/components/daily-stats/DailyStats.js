import React from 'react';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
//components
// import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	completedStar: {
		fontSize: 80,
		width: '100%',
	},
}));

export default ({ dailyActivities, activityGoals, dailyDistance }) => {
	const classes = useStyles();

	var chartStepStats = [
		{
			name: 'Daily steps goal',
			'Daily steps': dailyActivities.steps,
			'Goal steps': activityGoals.steps,
		},
	];

	var pieGraphSteps = [
		{
			name: 'Steps taken',
			value: dailyActivities.steps,
		},
		{
			name: 'Steps left until goal',
			value: activityGoals.steps - dailyActivities.steps,
		},
	];

	var pieGraphFloors = [
		{
			name: 'Floors climbed',
			value: dailyActivities.floors,
		},
		{
			name: 'Floors left',
			value: activityGoals.floors - dailyActivities.floors,
		},
	];

	var pieGraphDistance = [
		{
			name: 'Distance Travelled',
			value: dailyDistance.distance,
		},
		{
			name: 'Distance left',
			value: parseFloat(
				Number(activityGoals.distance - dailyDistance.distance).toFixed(2)
			),
		},
	];

	return (
		<div>
			{dailyActivities.steps <= 0 ? (
				<div>
					Hmmm it looks like you may need to upload your data to fitbit..
				</div>
			) : (
				<Grid container spacing={2}>
					<Grid item xs={10} md={4}>
						Steps:
						{activityGoals.steps - dailyActivities.steps <= 0 ? (
							<div>
								<StarIcon className={classes.completedStar} />
								<br />
								Congrats! Goal Achieved!
							</div>
						) : (
							<div>
								<PieChart
									width={350}
									height={450}
									data={pieGraphSteps}
									dataKey={'value'}
									nameKey={'name'}
									fill={'#8884d8'}
									domain={[0, 20000]}
								/>
							</div>
						)}
					</Grid>
					<Grid item xs={10} md={4}>
						Today's Floors:
						{activityGoals.floors - dailyActivities.floors <= 0 ? (
							<div>
								<StarIcon className={classes.completedStar} />
								<br />
								Congrats! Goal Achieved!
							</div>
						) : (
							<PieChart
								width={350}
								height={450}
								data={pieGraphFloors}
								dataKey={'value'}
								nameKey={'name'}
								fill={'#8884d8'}
								domain={[0, 20000]}
							/>
						)}
					</Grid>
					<Grid item xs={10} md={4} style={{ overflow: 'visable' }}>
						Today's Distance:
						{activityGoals.distance - dailyDistance.distance <= 0 ? (
							<div>
								<StarIcon className={classes.completedStar} />
								<br />
								Congrats! Goal Achieved!
							</div>
						) : (
							<PieChart
								width={350}
								height={450}
								data={pieGraphDistance}
								dataKey={'value'}
								nameKey={'name'}
								fill={'#8884d8'}
								domain={[0, 20000]}
							/>
						)}
					</Grid>
				</Grid>
			)}
		</div>
	);
};
