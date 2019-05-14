import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Pages } from '../../configs/pages'
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import MoviesPage from '../../pages/MoviesPage';

const drawerWidth = 240;

const styles = (theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20,
		},
		title: {
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing.unit,
				width: 'auto',
			},
		},
		searchIcon: {
			width: theme.spacing.unit * 9,
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
			width: '100%',
		},
		inputInput: {
			paddingTop: theme.spacing.unit,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit,
			paddingLeft: theme.spacing.unit * 10,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: 120,
				'&:focus': {
					width: 200,
				},
			},
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		  },
		  drawerPaper: {
			width: drawerWidth,
		  },
		  drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: '0 8px',
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		  },
	});

export interface Props extends WithStyles<typeof styles> { }

const searchHandler = () => {

}

const SearchAppBar = (props: Props) => {

	const { classes } = props;

	const [open, setOpen] = React.useState(false);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
						<MenuIcon onClick={handleDrawerOpen} />
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit" noWrap>
						Movies API Demo
          			</Typography>
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{Pages.map((page, index) => (
						<Link to={page.route}>
							<ListItem button key={page.name}>
								<ListItemIcon>{1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={page.name} />
							</ListItem>
						</Link>
					))}
					</List>
			</Drawer>
		</div>
	);
}

SearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(SearchAppBar);