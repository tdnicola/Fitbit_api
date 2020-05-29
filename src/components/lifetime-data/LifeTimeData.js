import React from 'react';

import Grid from '@material-ui/core/Grid';
import StatsCard from '../stats-card/StatsCard';
import distance from '../../images/noun_distance_939669.svg';
import stairs from '../../images/noun_steps_249968.svg';
import steps from '../../images/noun_steps_3105633.svg';

export default ({ lifeTimeData }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<StatsCard
					title={'Total Steps: '}
					data={lifeTimeData.total.steps}
					logo={steps}
				/>
			</Grid>
			<Grid item xs={4}>
				<StatsCard
					title={'Total Floors: '}
					data={lifeTimeData.total.floors}
					logo={stairs}
				/>
			</Grid>
			<Grid item xs={4}>
				<StatsCard
					title={'Total Distance: '}
					data={lifeTimeData.total.distance}
					logo={distance}
				/>
			</Grid>
		</Grid>
	);
};
