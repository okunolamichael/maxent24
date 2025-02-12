import {React, useEffect} from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { use } from 'react';
import useStyles from './styles';

const categories = [
    { label: 'popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Drama', value: 'drama' },
    { label: 'Horror', value: 'horror' },
    { label: 'Crime', value: 'crime' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Romance', value: 'romance' },
    { label: 'Science Fiction', value: 'science_fiction' },
    { label: 'Mystery', value: 'mystery' },
    { label: 'Family', value: 'family' },
    { label: 'Animation', value: 'animation' },
    { label: 'History', value: 'history' },
    { label: 'War', value: 'war' },
    { label: 'Music', value: 'music' },
    { label: 'Documentary', value: 'documentary' },
    { label: 'Western', value: 'western' },
    { label: 'TV Movie', value: 'tv_movie' },
    { label: 'Foreign', value: 'foreign' },
];

const whiteLogo = './src/assets/MAXENT24_white.png';
const darkLogo = './src/assets/MAXENT24_black.png';

const Sidebar = ({setMobileOpen}) => {

    const theme = useTheme();
    const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink} >
        <img 
            className={classes.logo}
            src={theme.palette.mode === 'light' ? darkLogo : whiteLogo}
            alt="Maxent24" 
            style={{ width: '70%' }}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({label, value}) => (
            <Link key={value} className={classes.links} to='/'>
                <ListItem onClick={() => {}} button>
                    {/* <ListItemIcon>
                        <img src={darkLogo} alt="" className={classes.genreImages} height={30} />
                    </ListItemIcon> */}
                    <ListItemText primary={label} />
                </ListItem>
            </Link>
        ))}
      </List>
        <Divider />
        <List>
            <ListSubheader>Genres</ListSubheader>
            {demoCategories.map(({label, value}) => (
                <Link key={value} className={classes.links} to='/'>
                    <ListItem onClick={() => {}} button>
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
            ))}
        </List>
    </>
  )
}

export default Sidebar
