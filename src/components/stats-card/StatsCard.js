import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: '75px',
		backgroundColor: 'white',
		color: 'black',
		overflow: 'visible',
	},

	cardImage: {
		marginTop: -35,
		height: 60,
		backgroundColor: '#2196f3',
		borderRadius: '5px',
		width: '90px',
		zIndex: '50',
	},
	logo: {
		marginLeft: '30px',
		marginTop: '10px',
		height: 30,
	},
	content: {
		left: '50px',
		top: '50px',
		zIndex: 1,
	},
});

export default ({ title, data, logo }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Card className={classes.root} variant='outlined'>
				<CardContent>
					<div className={classes.cardImage}>
						<img src={logo} alt='logo' className={classes.logo} />
					</div>
					<Typography variant='h5' component='h3' className={classes.content}>
						{title + data}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
