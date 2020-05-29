import React from 'react';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
//components
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	completedStar: {
		fontSize: 80,
		// justifyContent: 'center',
		margin: 'auto',
		width: '100%',
		// textAlign: 'center',
	},
}));

const data = [
	{
		name: 'Page A',
		'Daily Steps': 4000,
		pv: 2400,
		uv: 3500,
	},
];

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
			value: activityGoals.distance - dailyDistance.distance,
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
					{/* <Grid key={5}>
					<BarChart
						width={350}
						height={350}
						data={data}
						xDataKey={'name'}
						barDataKey={'uv'}
						secondBarDataKey={'pv'}
						secondBarfill={'#2884d8'}
						fill={'#8884d8'}
						domain={[0, 10000]}
					/>
				</Grid>
				<Grid key={5}>
					<BarChart
						width={350}
						height={350}
						data={data}
						xDataKey={'name'}
						barDataKey={'uv'}
						secondBarDataKey={'pv'}
						secondBarfill={'#2884d8'}
						fill={'#8884d8'}
						domain={[0, 10000]}
					/>
				</Grid>
				<Grid key={5}>
					<BarChart
						width={350}
						height={350}
						data={chartStepStats}
						xDataKey={'name'}
						barDataKey={'Daily steps'}
						secondBarDataKey={'Goal steps'}
						secondBarfill={'#2884d8'}
						fill={'#8884d8'}
						domain={[0, 20000]}
					/>
				</Grid> */}
					<Grid key={5}>
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
									height={350}
									data={pieGraphSteps}
									dataKey={'value'}
									nameKey={'name'}
									fill={'#8884d8'}
									domain={[0, 20000]}
								/>
							</div>
						)}
					</Grid>
					<Grid key={5}>
						Today's Floors:
						{activityGoals.floors - dailyActivities.floors <= 0 ? (
							<div>
								<StarIcon className={classes.completedStar} />
								<br />
								Congrats! Goal Achieved!
								{console.log(dailyDistance, dailyDistance.floors)}
							</div>
						) : (
							<PieChart
								width={350}
								height={350}
								data={pieGraphFloors}
								dataKey={'value'}
								nameKey={'name'}
								fill={'#8884d8'}
								domain={[0, 20000]}
							/>
						)}
					</Grid>
					<Grid key={5}>
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
								height={350}
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
