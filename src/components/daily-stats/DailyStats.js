import React from 'react';
import Grid from '@material-ui/core/Grid';

//components
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';

const data = [
	{
		name: 'Page A',
		'Daily Steps': 4000,
		pv: 2400,
		uv: 3500,
	},
];

export default ({ dailyActivities, activityGoals, dailyDistance }) => {
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
			value: activityGoals.floors - activityGoals.floors,
		},
	];

	var pieGraphDistance = [
		{
			name: 'Distance',
			value: dailyDistance.distance,
		},
		{
			name: 'Distance left',
			value: activityGoals.distance - dailyDistance.distance,
		},
	];

	// activitieGoals.steps vs dailyActivities.steps
	// activitieGoals.floors vs dailyActivities.floors
	return (
		<div>
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
					<PieChart
						width={350}
						height={350}
						data={pieGraphSteps}
						dataKey={'value'}
						nameKey={'name'}
						fill={'#8884d8'}
						domain={[0, 20000]}
					/>
				</Grid>
				<Grid key={5}>
					Today's Floors:
					{activityGoals.floors - activityGoals.floors <= 0 ? (
						<div>Congrats! No floors to climb left!</div>
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
					<PieChart
						width={350}
						height={350}
						data={pieGraphDistance}
						dataKey={'value'}
						nameKey={'name'}
						fill={'#8884d8'}
						domain={[0, 20000]}
					/>
				</Grid>
			</Grid>
		</div>
	);
};
