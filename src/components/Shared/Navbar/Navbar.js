import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { amber } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

import { Grid, Icon } from '@mui/material';

const Navbar = () => {
    const [state, setState] = React.useState(false);
    const drawerBgColor = amber[400];

    const drawer = (
        <Box sx={{ height: '100vh' }} role="presentation">
            <Grid container>
                <Grid item xs={5}>
                </Grid>
                <Grid sx={{ backgroundColor: drawerBgColor }} item xs={7}>
                    <Box sx={{ textAlign: 'right' }}>
                        <IconButton onClick={() => setState(false)}
                            sx={{ mr: { xs: 2, sm: 3 }, mt: { xs: 1.5, md: 3 } }}
                            size="large" edge="start" color="inherit" aria-label="close">
                            <Icon>close</Icon>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <h1>Grid 1</h1>
                </Grid>
                <Grid sx={{ backgroundColor: drawerBgColor, height: '100vh' }} item xs={7}>
                    <h1>Grid 2</h1>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, py: 2, px: { xs: 1, md: 3 } }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'white' }} fontSize={{ lg: 40, xs: 20 }} variant="h3" component="div">
                                Muzify
                            </Typography>
                        </Box>
                        {/* <Box sx={{}}>
                            <NavLink style={linkStyles} to="/login"><Button color="inherit">Login</Button></NavLink>
                            <NavLink style={linkStyles} to="/signup"><Button color="inherit">Sign Up</Button></NavLink>
                        </Box> */}
                        <Box sx={{ px: { xs: 1, md: 3 } }}>
                            <IconButton onClick={() => setState(true)} size="large" edge="start" color="inherit" aria-label="menu" >
                                <Icon>menu</Icon>
                            </IconButton>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer open={state} anchor='top' onClose={() => setState(false)} >
                        {drawer}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navbar;