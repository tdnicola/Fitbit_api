import React from 'react';

import { PieChart, Pie, Cell, Legend, Line } from 'recharts';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

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

	const testColors = ['#8884d8', '#2884d8'];
	return (
		<PieChart width={width} height={height}>
			<Pie
				style={{ fontSize: 20 }}
				data={data}
				dataKey={dataKey}
				nameKey={nameKey}
				innerRadius={95}
				label
				paddingAngle={1}
			>
				{data01.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={testColors[index]} />
				))}
			</Pie>

			<Legend />
		</PieChart>
	);
};
