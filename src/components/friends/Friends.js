import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
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

	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default ({ friendsData }) => {
	const classes = useStyles();

	return (
		<Container>
			Friends:
			<Grid container>
				{friendsData.map((friend) => (
					<Grid container item spacing={1}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar
										aria-label='avatar'
										className={classes.avatar}
										src={friend.attributes.avatar}
									/>
								}
								title={friend.attributes.name}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
