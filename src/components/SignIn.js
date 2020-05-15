import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://tonynicola.com/'>
				TonyNicola.com
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	fitbitSubmit: {
		color: 'white',
		textDecoration: 'none',
	},
}));

export default ({ loginGuest }) => {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component='h1' variant='h5'>
					Login with Fitbit
				</Typography>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					<a
						className={classes.fitbitSubmit}
						href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQSB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'
					>
						Login to Fitbit
					</a>
				</Button>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className={classes.submit}
					onClick={(e) => loginGuest(e)}
				>
					Continue as Guest
				</Button>
			</div>

			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};
