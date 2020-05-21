import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import BarChart from '../bar-chart/BarChart';
import Grid from '@material-ui/core/Grid';

const data = [
	{
		name: 'Page A',
		'Daily Steps': 4000,
		pv: 2400,
		uv: 3500,
	},
];

const useStyles = makeStyles({
	inlineCharts: {
		display: 'inline',
		margin: 20,
		fontSize: 14,
	},
});
export default ({ dailyActivities, activityGoals }) => {
	const classes = useStyles();
	console.log(activityGoals, dailyActivities);
	var chartStepStats = [
		{
			name: 'Daily steps goal',
			'Daily steps': dailyActivities.steps,
			'Goal steps': activityGoals.steps,
		},
	];
	// activitieGoals.steps vs dailyActivities.steps
	// activitieGoals.floors vs dailyActivities.floors
	return (
		<div>
			<Grid container spacing={2}>
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
				</Grid>
			</Grid>
		</div>
	);
};
