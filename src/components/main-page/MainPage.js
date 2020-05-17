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

const useStyles = makeStyles({
	root: {
		// minWidth: 275,
		width: '70%',
		margin: '25px',
		backgroundColor: '#03a9f4',
		color: 'black',
		fontSize: 14,
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
	avatar: {
		justifyContent: 'center',
	},
});

const data = [
	{
		name: 'Page A',
		'Daily Steps': 4000,
		pv: 2400,
	},
	{
		name: 'Page B',
		'Daily Steps': 3000,
		pv: 1398,
	},
	{
		name: 'Page C',
		'Daily Steps': 2000,
		pv: 9800,
	},
	{
		name: 'Page D',
		'Daily Steps': 2780,
		pv: 3908,
	},
	{
		name: 'Page E',
		'Daily Steps': 1890,
		pv: 4800,
	},
	{
		name: 'Page F',
		'Daily Steps': 2390,
		pv: 3800,
	},
	{
		name: 'Page G',
		'Daily Steps': 3490,
		pv: 4300,
	},
];
function MainPage({ profileData, weeklyStepsData }) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			{console.log(weeklyStepsData)}
			<Container maxWidth='lg'>
				<BarChart width={730} height={350} data={weeklyStepsData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis domain={[0, 20000]} />
					<Tooltip />
					<Legend />
					<Bar dataKey='value' fill='#8884d8' />
				</BarChart>
				<Badges profileData={profileData} />
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
