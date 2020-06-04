import React from 'react';

import {
	ComposedChart,
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
	goal,
}) => {
	return (
		<div style={{ marginTop: 70 }}>
			Weekly Steps
			<ComposedChart
				width={width}
				height={height}
				data={data}
				style={{ fontSize: 14 }}
			>
				<XAxis dataKey={xDataKey} />
				<YAxis domain={domain} />
				<Tooltip />
				<Legend />
				<CartesianGrid stroke='#f5f5f5' />
				<Bar dataKey={barDataKey} fill={fill} />
				<Line type='monotone' dataKey={goal} stroke='#ff7300' />
			</ComposedChart>
		</div>
	);
};
