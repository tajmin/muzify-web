import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import React from 'react';
import logo from '../../../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: blueGrey[900] }}>
            <Container sx={{ px: { xs: 6, lg: 4 }, py: 12 }} maxWidth={'lg'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <img src={logo} width={150} alt="logo" />
                    </Grid>
                    <Grid sx={{ color: grey[400] }} item xs={12} lg={3}>
                        <Typography sx={{ color: grey[200], mb: 3 }} fontSize={{ lg: 18, xs: 15 }} variant="h4" omponent="div">
                            Company
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                '& > *': {
                                    mb: 1.75
                                }
                            }}>
                            <Link href="#" color="inherit" underline="hover">
                                About
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Partners
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Career
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Blog
                            </Link>
                        </Box>

                    </Grid>
                    <Grid sx={{ color: grey[400] }} item xs={12} lg={3}>
                        <Typography sx={{ color: grey[200], mb: 3 }} fontSize={{ lg: 18, xs: 15 }} variant="h4" component="div">
                            Community
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                '& > *': {
                                    mb: 1.75
                                }
                            }}
                        >
                            <Link href="#" color="inherit" underline="hover">
                                For Artists
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Developers
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Advertising
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Vendors
                            </Link>
                            <Link href="#" color="inherit" underline="hover">
                                Platform
                            </Link>
                        </Box>
                    </Grid>
                    <Grid sx={{ color: grey[400], '& > *': { mr: 2 } }} item xs={12} lg={3}>
                        <LinkedInIcon fontSize="large" />
                        <FacebookIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                        <TwitterIcon fontSize="large" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;