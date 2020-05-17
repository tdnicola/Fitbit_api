import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Legend,
	Bar,
	Tooltip,
	RadialBarChart,
	RadialBar,
} from 'recharts';

const data = [
	{
		name: 'Page A',
		'Daily Steps': 4000,
		pv: 2400,
		uv: 3500,
	},
];
const data2 = [
	{
		name: '18-24',
		uv: 31.47,
		pv: 2400,
		fill: '#8884d8',
	},
	{
		name: '25-29',
		uv: 26.69,
		pv: 4567,
		fill: '#83a6ed',
	},
	{
		name: '30-34',
		uv: -15.69,
		pv: 1398,
		fill: '#8dd1e1',
	},
	{
		name: '35-39',
		uv: 8.22,
		pv: 9800,
		fill: '#82ca9d',
	},
	{
		name: '40-49',
		uv: -8.63,
		pv: 3908,
		fill: '#a4de6c',
	},
	{
		name: '50+',
		uv: -2.63,
		pv: 4800,
		fill: '#d0ed57',
	},
	{
		name: 'unknow',
		uv: 6.67,
		pv: 4800,
		fill: '#ffc658',
	},
];
const useStyles = makeStyles({
	inlineCharts: {
		display: 'inline',
		margin: 20,
		fontSize: 14,
	},
	graphCharts: {
		display: 'auto',
		fontSize: 12,
	},
});
export default ({ dailyActivies }) => {
	const classes = useStyles();

	return (
		<div>
			<BarChart
				className={classes.inlineCharts}
				width={330}
				height={250}
				data={data}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='pv' fill='#8884d8' />
				<Bar dataKey='uv' fill='#82ca9d' />
			</BarChart>
			<BarChart
				className={classes.inlineCharts}
				width={330}
				height={250}
				data={data}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='pv' fill='#8884d8' />
				<Bar dataKey='uv' fill='#82ca9d' />
			</BarChart>
			<BarChart
				className={classes.inlineCharts}
				width={330}
				height={250}
				data={data}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='pv' fill='#8884d8' />
				<Bar dataKey='uv' fill='#82ca9d' />
			</BarChart>

			<RadialBarChart
				width={730}
				height={250}
				innerRadius='10%'
				outerRadius='80%'
				data={data2}
				startAngle={180}
				endAngle={0}
				className={classes.graphCharts}
			>
				<RadialBar
					minAngle={15}
					label={{ fill: '#666', position: 'insideStart' }}
					background
					clockWise={true}
					dataKey='uv'
				/>
				<Legend
					iconSize={10}
					width={120}
					height={140}
					layout='vertical'
					verticalAlign='middle'
					align='right'
				/>
				<Tooltip />
			</RadialBarChart>
		</div>
	);
};
