import { Box, Container, Divider, Grid, Icon, Link, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import React from 'react';
import logo from '../../../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: blueGrey[900] }}>
            <Container sx={{ px: { xs: 6, lg: 4 }, py: 12 }} maxWidth={'lg'}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={3}>
                        <img src={logo} width={160} alt="logo" />
                    </Grid>
                    <Grid sx={{ color: grey[400] }} item xs={12} lg={3}>
                        <Typography sx={{ color: grey[200], mb: 3 }} fontSize={{ lg: 18, xs: 15 }} variant="h4" component="div">
                            Company
                        </Typography>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            About
                        </Link>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            Partners
                        </Link>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            Career
                        </Link>
                        <Link sx={{ display: 'block' }} href="#" color="inherit" underline="hover">
                            Blog
                        </Link>
                    </Grid>
                    <Grid sx={{ color: grey[400] }} item xs={12} lg={3}>
                        <Typography sx={{ color: grey[200], mb: 3 }} fontSize={{ lg: 18, xs: 15 }} variant="h4" component="div">
                            Community
                        </Typography>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            For Artists
                        </Link>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            Developers
                        </Link>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            Advertising
                        </Link>
                        <Link sx={{ display: 'block', mb: 1.25 }} href="#" color="inherit" underline="hover">
                            Vendors
                        </Link>
                        <Link sx={{ display: 'block' }} href="#" color="inherit" underline="hover">
                            Platform
                        </Link>
                    </Grid>
                    <Grid sx={{ color: grey[400], '& > *': { mr: 2 } }} item xs={12} lg={3}>
                        <LinkedInIcon fontSize="large" />
                        <FacebookIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                        <TwitterIcon fontSize="large" />
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ backgroundColor: blueGrey[700] }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: grey[500] }}>
                <Icon >copyright</Icon>
                <Typography sx={{ py: 2, ml: 1 }} fontSize={{ lg: 16, xs: 14 }} variant="h4">
                    Muzify
                </Typography>
            </Box>

        </Box>
    );
};

export default Footer;