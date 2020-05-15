import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		// minWidth: 275,
		width: '70%',
		margin: '75px',
		backgroundColor: '#03a9f4',
		color: 'black',
		fontSize: '14px',
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

function MainPage({ profileData, dataTransfer }) {
	const classes = useStyles();
	const [lifeTimeData, setLifeTimeData] = useState([]);

	useEffect(() => {
		setLifeTimeData(dataTransfer);
	});

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Typography component='div' style={{ backgroundColor: '#cfe8fc' }}>
					<Grid container spacing={2}>
						{profileData.topBadges.map((item) => {
							return (
								<Grid container item xs={4} spacing={1}>
									<Card className={classes.root}>
										<CardContent>
											<Avatar alt={item.badgeType} src={item.image100px} />
											{item.description}
											<Typography variant='h5' component='h2'></Typography>
											<Typography className={classes.pos} color='textSecondary'>
												adjective
											</Typography>
											<Typography variant='body2' component='p'>
												well meaning and kindly.
												<br />
												{'"a benevolent smile"'}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Typography>
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
