import React from 'react';

import Grid from '@material-ui/core/Grid';
import StatsCard from '../stats-card/StatsCard';
import distance from '../../images/noun_distance_939669.svg';
import stairs from '../../images/noun_steps_249968.svg';
import steps from '../../images/noun_steps_3105633.svg';

export default ({ lifeTimeData }) => {
	return (
		<Grid container spacing={2}>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Steps: '}
					lifeTimeData={lifeTimeData.total.steps}
					logo={steps}
				/>
			</Grid>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Floors: '}
					lifeTimeData={lifeTimeData.total.floors}
					logo={stairs}
				/>
			</Grid>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Distance: '}
					lifeTimeData={lifeTimeData.total.distance}
					logo={distance}
				/>
			</Grid>
		</Grid>
	);
};
