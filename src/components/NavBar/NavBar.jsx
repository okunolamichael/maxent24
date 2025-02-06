import {React, useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7, MobileOffSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = true;
    const [mobileOpen, setmobileOpen] = useState(false);

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>

{/* menu, theme and search */}

            {isMobile && (
                <IconButton 
                    color='inherit'
                    edge='start'
                    style={{ outline: 'none' }}
                  // opening the menu callback function
                    onClick={() => setmobileOpen((prevMobileOpen) => !prevMobileOpen)}
                    className={classes.menuButton}
                >
                    <Menu />
                </IconButton>
            )}

            <IconButton color='inherit' sx={{ml: 1}} onClick={()=> {}}>
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            {!isMobile && 'Search...'}

{/* movie profile or login */}

            <div>
              {!isAuthenticated ? (
                <Button color='inherit' onClick={() => {}}>
                  Login &nbsp; <AccountCircle />
                </Button>
              ) : (
                <Button 
                  color='inherit'
                  component={Link}
                  to={`/profile/:id`}
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar 
                    style={{ width: 30, height: 30 }}
                    alt='Profile'
                    src=""
                  />
                </Button>
              )}
            </div>
            {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>

{/* sidebar or drawer */}

      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='left'
              open={mobileOpen}
            // closing the menu callback function
              onClose={() => setmobileOpen((previousMobileOpen) => !previousMobileOpen)}
              ModalProps={{ keepMounted: true }}
              classes={{ paper: classes.drawerPaper }}
              >
              <Sidebar setmobileOpen={setmobileOpen} />

              <div className={classes.drawerContainer}>
                <Button 
                  color='inherit'
                  component={Link}
                  to='/'
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  Home
                </Button>
                <Button 
                  color='inherit'
                  component={Link}
                  to='/movies'
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  Movies
                </Button>
                <Button 
                  color='inherit'
                  component={Link}
                  to='/tv-shows'
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  TV Shows
                </Button>
                <Button 
                  color='inherit'
                  component={Link}
                  to='/favorites'
                  className={classes.linkButton}
                  onClick={() => {}}
                >
                  Favorites
                </Button>
              </div>
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant='permanent'
              open
            >
              <Sidebar setmobileOpen={setmobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar
