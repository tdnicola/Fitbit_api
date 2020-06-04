import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

//ICONS
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import StarsIcon from '@material-ui/icons/Stars';

//COMPONENTS
import Badges from '../badges/Badges';
import HomeIcon from '@material-ui/icons/Home';
import MainPage from '../main-page/MainPage';
import AboutMe from '../about-me/AboutMe';
import Friends from '../friends/Friends';
import LifeTimeData from '../lifetime-data/LifeTimeData';

// import LifeTimeData from '../lifetime-data/LifeTimeData';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		margin: '20px',
		marginTop: '100px',
	},
	avatarImg: {
		borderRadius: '50%',
		height: '35px',
		float: 'right',
		marginLeft: '15px',
	},
	logoutButton: {
		float: 'right',
		color: 'white',
		margin: 5,
	},
}));

export default ({
	profileData,
	lifeTimeData,
	mainDashHandler,
	mainDashInfo,
	aboutMeButtonHandler,
	aboutMeButton,
	weeklyStepsData,
	dailyActivities,
	logOutButtonHandler,
	activityGoals,
	badgesButtonHandler,
	badgesButton,
	friendsButtonHandler,
	friendsButton,
	friendsData,
	lifeTimeButtonHandler,
	lifeTimeButton,
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						Hello {profileData.displayName}
					</Typography>
					<img
						className={classes.avatarImg}
						src={profileData.avatar640}
						alt='avatar'
					/>
					<Button
						className={clsx(classes.logoutButton)}
						onClick={(e) => {
							logOutButtonHandler(e);
						}}
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem
						button
						key={'Home'}
						onClick={(e) => {
							mainDashHandler(e);
						}}
					>
						<ListItemIcon>{<HomeIcon />}</ListItemIcon>
						<ListItemText primary={'Home'} />
					</ListItem>
					<ListItem
						button
						key={'aboutMe'}
						onClick={(e) => {
							aboutMeButtonHandler(e);
						}}
					>
						<ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
						<ListItemText primary={'About me'} />
					</ListItem>
					<Divider />
					<ListItem
						button
						key={'badges'}
						onClick={(e) => {
							badgesButtonHandler(e);
						}}
					>
						<ListItemIcon>{<StarsIcon />}</ListItemIcon>
						<ListItemText primary={'Badges'} />
					</ListItem>

					<ListItem
						button
						key={'lifetime Data'}
						onClick={(e) => {
							lifeTimeButtonHandler(e);
						}}
					>
						<ListItemIcon>{<AssessmentIcon />}</ListItemIcon>
						<ListItemText primary={'Lifetime Data'} />
					</ListItem>

					<ListItem
						button
						key={'friends'}
						onClick={(e) => {
							friendsButtonHandler(e);
						}}
					>
						<ListItemIcon>{<GroupIcon />}</ListItemIcon>
						<ListItemText primary={'Friends'} />
					</ListItem>
				</List>
				<Divider />
			</Drawer>
			<div className={classes.content}>
				{activityGoals && mainDashInfo && (
					<MainPage
						dailyActivities={dailyActivities}
						profileData={profileData}
						weeklyStepsData={weeklyStepsData}
						activityGoals={activityGoals}
					/>
				)}
				{aboutMeButton && (
					<AboutMe profileData={profileData} lifeTimeData={lifeTimeData} />
				)}
				{lifeTimeButton && <LifeTimeData lifeTimeData={lifeTimeData} />}
				{badgesButton && <Badges profileData={profileData} />}
				{friendsButton && <Friends friendsData={friendsData} />}
			</div>
		</div>
	);
};
