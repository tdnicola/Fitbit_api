import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		width: '70%',
		margin: '25px',
		backgroundColor: '#3399CC',
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

export default ({ profileData }) => {
	const classes = useStyles();

	return (
		<Typography component='div'>
			<Grid container spacing={1}>
				{profileData.topBadges.map((item) => {
					return (
						<Grid container item xs={3} spacing={1}>
							<Card className={classes.root}>
								<CardContent>
									<Avatar
										className={classes.avatar}
										alt={item.badgeType}
										src={item.image100px}
									/>
									<Typography className={classes.pos} color='textSecondary'>
										{item.shortDescription}
										<br />
										Date: {item.dateTime}
									</Typography>

									<Typography variant='body2' component='p'>
										{item.marketingDescription}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Typography>
	);
};
