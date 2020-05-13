// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { useRadioGroup } from '@material-ui/core';

// export default ({ useGuestData, userData }) => (
// 	<div className='sideBar'>
// 		<Button
// 			type='submit'
// 			fullWidth
// 			variant='contained'
// 			color='primary'
// 			onClick={(e) => useGuestData(e)}
// 		>
// 			get userData
// 		</Button>
// 		{userData.fullName}
// 		{console.log(userData)}
// 	</div>
// );

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		marginTop: '50px',
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

export default ({ userData }) => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom
				>
					Weight:
					{userData.weight}
				</Typography>
				<Typography variant='h5' component='h2'>
					hmmm
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					adjective
				</Typography>
				<Typography variant='body2' component='p'>
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};
