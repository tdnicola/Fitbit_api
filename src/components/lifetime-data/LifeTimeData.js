import React from 'react';

import Grid from '@material-ui/core/Grid';
import StatsCard from '../stats-card/StatsCard';
export default ({ lifeTimeData }) => {
	return (
		<Grid container spacing={2}>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Steps:'}
					lifeTimeData={lifeTimeData.total.steps}
				/>
			</Grid>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Floors:'}
					lifeTimeData={lifeTimeData.total.floors}
				/>
			</Grid>
			<Grid container item xs={4} spacing={1}>
				<StatsCard
					title={'Total Distance:'}
					lifeTimeData={lifeTimeData.total.distance}
				/>
			</Grid>
		</Grid>
	);
};
