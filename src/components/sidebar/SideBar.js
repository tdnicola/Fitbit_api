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
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//components
import HomeIcon from '@material-ui/icons/Home';
import MainPage from '../main-page/MainPage';
import AboutMe from '../about-me/AboutMe';
import LifeTimeData from '../lifetime-data/LifeTimeData';

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
	},
	avatarImg: {
		borderRadius: '50%',
		height: '35px',
		float: 'right',
		marginLeft: '15px',
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
	dailyActivies,
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
						src='https://static0.fitbit.com/images/profile/defaultProfile_100.png'
						alt='avatar'
					/>
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
				</List>
				<List>
					{['Lifetime', 'Today', 'Past Week'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <AssessmentIcon /> : <PieChartIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<div className={classes.content}>
				{lifeTimeData && <LifeTimeData lifeTimeData={lifeTimeData} />}
				{profileData && mainDashInfo && (
					<MainPage
						dailyActivies={dailyActivies}
						profileData={profileData}
						weeklyStepsData={weeklyStepsData}
					/>
				)}
				{aboutMeButton && <AboutMe profileData={profileData} />}
			</div>
		</div>
	);
};
