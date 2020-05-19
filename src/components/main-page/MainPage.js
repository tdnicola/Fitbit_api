import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Legend,
	Bar,
	Tooltip,
} from 'recharts';

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

function MainPage({ profileData, weeklyStepsData, dailyActivies }) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<BarChart
					width={730}
					height={350}
					data={weeklyStepsData}
					style={{ fontSize: 14 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis domain={[0, 20000]} />
					<Tooltip />
					<Legend />
					<Bar dataKey='value' fill='#8884d8' />
				</BarChart>
				<Badges profileData={profileData} />

				<DailyStats dailyActivies={dailyActivies} />
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
