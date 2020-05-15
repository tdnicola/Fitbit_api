import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: '75px',
		backgroundColor: '#03a9f4',
		color: 'white',
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
});

export default ({ title, lifeTimeData }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{title}
				</Typography>
				{/* {lifeTimeData ? <em>Loading...</em> : lifeTimeData} */}
				{lifeTimeData}
				<Typography variant='body2' component='p'></Typography>
			</CardContent>
		</Card>
	);
};
