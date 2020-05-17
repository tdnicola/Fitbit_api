import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Badges from '../badges/Badges';

const useStyles = makeStyles({
	root: {
		// minWidth: 275,
		width: '70%',
		margin: '25px',
		backgroundColor: '#03a9f4',
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

function MainPage({ profileData }) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Badges profileData={profileData} />
			</Container>
		</React.Fragment>
	);
}
export default MainPage;
