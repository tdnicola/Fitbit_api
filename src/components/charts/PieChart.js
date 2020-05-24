import React from 'react';

import { PieChart, Pie, Cell, Legend, Line } from 'recharts';

export default ({ height, width, data, colors, dataKey, nameKey }) => {
	const data01 = [
		{
			name: 'Group A',
			value: 400,
		},
		{
			name: 'Group B',
			value: 300,
		},
	];
	const data02 = [
		{
			name: 'Group A',
			value: 2400,
		},
		{
			name: 'Group B',
			value: 4567,
		},
	];
	const testColors = ['#8884d8', '#2884d8'];
	return (
		<PieChart width={width} height={height}>
			<Pie
				data={data}
				dataKey={dataKey}
				nameKey={nameKey}
				cx='50%'
				cy='50%'
				innerRadius={50}
				label
			>
				<Line strokeWidth={1.5} />
				{data01.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={testColors[index]} />
				))}
			</Pie>

			<Legend />
		</PieChart>
	);
};
