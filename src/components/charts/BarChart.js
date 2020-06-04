import React from 'react';

import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Legend,
	Bar,
	Tooltip,
	Line,
} from 'recharts';

export default ({
	width,
	height,
	data,
	xDataKey,
	barDataKey,
	fill,
	domain,
	secondBarDataKey,
	secondBarfill,
	goals,
}) => {
	const secondBarChecker = () => {
		if (secondBarDataKey === undefined) {
			return;
		} else {
			return <Bar dataKey={secondBarDataKey} fill={secondBarfill} />;
		}
	};

	return (
		<BarChart
			width={width}
			height={height}
			data={data}
			style={{ fontSize: 14 }}
			// layout='vertical'
		>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey={xDataKey} />
			<YAxis domain={domain} />
			<Tooltip />
			<Legend />
			<Bar dataKey={barDataKey} fill={fill} />
			<Line type='monotone' dataKey={goals} stroke='#ff7300' />
			{console.log(data)}
			{secondBarChecker()}
		</BarChart>
	);
};
