import { Button, Container, Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../../images/headphone_girl.png'

const Banner = () => {
    return (
        <>
            <Container fixed sx={{ paddingTop: 4 }}>
                <Grid container spacing={4}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', lg: 'flex-start' } }}
                        item xs={12} md={6}>
                        <Typography
                            sx={{ fontWeight: 'bold', color: 'white' }}
                            variant="h1" component="div"
                            fontSize={{
                                lg: 70, xs: 50
                            }}>
                            Muzify
                        </Typography>
                        <Typography variant="h3" component="div" fontSize={{ lg: 50, xs: 30 }}
                            sx={{
                                fontWeight: 'bold',
                                color: '#c0c0c0',
                                textAlign: { xs: 'center', lg: 'left' },
                                marginY: 2
                            }}
                        >
                            Your Personal Music Library
                        </Typography>
                        <Button component={Link} to={'/my-player'} className='gradientThemeBg' sx={{ borderRadius: '1.5rem', paddingX: 2.5, paddingY: 1.25 }} variant="contained" size="large" endIcon={<Icon>play_arrow</Icon>}>
                            Play Now
                        </Button>
                    </Grid>
                    <Grid sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }} item xs={12} md={6}>
                        <img style={{ maxWidth: '90%' }} src={person} alt="a girl wearing headphone" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;
