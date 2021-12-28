import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { amber, grey, lightBlue } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from "@mui/material/Drawer";
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../../images/avatar.jpg'

import { Avatar, Button, Fab, Grid, Icon } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const [drawerState, setDrawerState] = React.useState(false);
    const { user, logout } = useAuth();
    let navigate = useNavigate();

    const drawer = (
        <Box onClick={() => setDrawerState(false)} role="presentation">
            <Grid container>
                <Grid
                    sx={{
                        background: 'linear-gradient(to bottom, #16a085, #f4d03f)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    item xs={4}>
                    <Box sx={{ textAlign: 'center' }} >
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            M
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            U
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            Z
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            I
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            F
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', my: 1.5 }} fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            Y
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ height: '100vh', position: 'relative' }} item xs={8}>
                    <Box sx={{ position: 'absolute', top: '1.5%', right: '3%' }} >
                        <Fab onClick={() => setDrawerState(false)}
                            size="medium" edge="start" color="inherit" aria-label="close">
                            <Icon>close</Icon>
                        </Fab>
                    </Box>
                    <Box sx={{ my: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {user?.email && <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: lightBlue[400],
                                my: 1.5,
                                wordWrap: 'break-word',
                                textAlign: 'center'
                            }}
                            fontSize={{ lg: 40, xs: 25 }} variant="h4" component="div">
                            Welcome, {user?.displayName}
                        </Typography>}
                        <Typography as={Link} to={'/'}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            Home
                        </Typography>
                        <Typography as={Link} to={'/my-player'}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            My Player
                        </Typography>
                        <Typography as={Link} to={'/my-playlist'}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            My Playlist
                        </Typography>
                        <Typography as={Link} to={'/all-songs'}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            All Songs
                        </Typography>

                        {user?.email && <Typography onClick={logout}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            Logout
                        </Typography>}
                        {!user?.email && <Typography as={Link} to={'/login'}
                            sx={{
                                fontWeight: 'bold',
                                color: amber[400],
                                my: 1.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in',
                                '&:hover': {
                                    color: lightBlue[400],
                                    transform: 'translate(-1rem, 0)'
                                }
                            }}
                            fontSize={{ lg: 100, xs: 50 }} variant="h1" component="div">
                            Login
                        </Typography>}

                    </Box>
                </Grid>
            </Grid>
        </Box >
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Box onClick={() => navigate('/')}
                            sx={{
                                flexGrow: 1,
                                cursor: 'pointer',
                                py: 2,
                                px: { xs: 1, md: 3 },
                            }}>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    transition: 'all 0.1s ease-in',
                                    '&:hover': {
                                        color: grey[300]
                                    }
                                }}
                                fontSize={{ lg: 42, xs: 26 }} variant="h1" component="div">
                                Muzify
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }} >
                            {
                                user?.email && <Avatar alt="Profile Picture"
                                    src={user?.photoURL ? user?.photoURL : avatar}
                                    sx={{ width: 40, height: 40, display: 'inline-block', mr: 2 }}
                                />
                            }
                            {
                                !user?.email && <Button
                                    component={Link} to={'/sign-up'}
                                    sx={{ px: 1.5, py: 0.75, mr: 2, backgroundColor: amber[400] }}
                                    variant="contained"
                                >
                                    Sign Up
                                </Button>
                            }
                            <IconButton onClick={() => setDrawerState(true)} size="large" edge="start" color="inherit" aria-label="menu" >
                                <Icon sx={{ fontSize: 30, color: '#e7e7e7' }}>menu</Icon>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer open={drawerState} anchor='top' onClose={() => setDrawerState(false)} >
                        {drawer}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navbar;