import React from 'react';

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export default ({ height, width, data, colors, datakey, name }) => {
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
		<PieChart width={730} height={250}>
			<Pie
				data={data01}
				dataKey='value'
				nameKey='name'
				cx='50%'
				cy='50%'
				outerRadius={50}
				fill='#8884d8'
			>
				{data01.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={testColors[index]} />
				))}
			</Pie>

			<Legend />
		</PieChart>
	);
};
