import { Badge, Box, Button, Container, Divider, Grid, Icon, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Single from '../../components/Single/Single';
import featuredAlbum from '../../images/featured.jpg'
import { clearPlayList, fetchAllSongs } from '../../redux/slices/songSlice';
import spinner from '../../images/spinner.gif'

const AllSongs = () => {
    const singles = useSelector((state) => state.songs.songs);
    const isLoading = useSelector((state) => state.songs.isLoading);
    const dispatch = useDispatch();
    const myPlayList = useSelector((state) => state.songs.myPlaylist);
    let navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchAllSongs())
    }, [])

    //spinner
    if (isLoading) {
        return (
            <Box
                sx={{
                    backgroundColor: '#000',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img style={{ margin: '0 auto' }} src={spinner} alt="" />
            </Box>
        )
    }

    return (
        <Box>
            <Box sx={{ background: 'linear-gradient(166deg, rgba(55,62,66,1) 0%, rgba(16,45,138,1) 100%)', }}>
                <Navbar style={{ background: 'inherit' }}></Navbar>
                <Container sx={{ px: 10, py: 5 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                            <img style={{ width: '100%' }} src={featuredAlbum} alt="album cover" />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Typography variant="h1" fontSize={{ lg: 40, xs: 25 }}
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    wordWrap: "break-word",
                                    pt: { lg: 4 }, pb: 1
                                }}
                            >
                                Anecdotes
                            </Typography>
                            <Typography variant="h2" fontSize={{ lg: 25, xs: 20 }}
                                sx={{
                                    fontWeight: 'bold',
                                    color: grey[300],
                                    wordWrap: "break-word",
                                    pb: 3
                                }}
                            >
                                Makzo
                            </Typography>
                            <Typography variant="body1" gutterBottom
                                sx={{
                                    color: grey[300],
                                    wordWrap: "break-word",
                                    mb: { xs: 3, lg: 6 }
                                }}>
                                Sound producer Makzo releases his debut EP of 6 singles this fall on various platforms. Get a first glance into his work through muzify. Stream Now.
                            </Typography>
                            <Button className='gradientThemeBg' variant="contained" size="large" endIcon={<Icon>play_arrow</Icon>}>
                                Stream Now
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: '#000', pt: 4, pb: 10 }}>
                <Container sx={{ px: { xs: 6, lg: 4 } }}>
                    <Typography variant="h4" component="div" fontSize={{ lg: 20, xs: 15 }}
                        sx={{
                            color: grey[300],
                            pt: 10,
                            pb: 0.5
                        }}
                    >
                        Latest Release
                    </Typography>
                    <Typography variant="h1" component="div" fontSize={{ lg: 50, xs: 30 }}
                        sx={{
                            fontWeight: 'bold',
                            color: grey[100],
                        }}
                    >
                        Singles
                    </Typography>
                    <Divider sx={{ backgroundColor: grey[300], mt: 2, mb: 8 }} />
                    <Box>
                        <Grid container spacing={4}>
                            {
                                singles.map(single => <Grid key={single._id} item xs={12} lg={4}>
                                    <Single single={single}>
                                    </Single>
                                </Grid>)
                            }
                        </Grid>
                    </Box>
                </Container>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '55%',
                        right: '3%',
                        backgroundColor: grey[100],
                        py: 2.25,
                        px: 1,
                        zIndex: 11,
                        borderRadius: '1.75rem',
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                    <Badge onClick={() => navigate('/my-playlist')}
                        sx={{
                            color: grey[700],
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in',
                            "&:hover": {
                                color: grey[400]
                            },
                            "& .MuiBadge-badge": {
                                color: "white",
                                background: "linear-gradient(166deg, rgba(76,163,227,1) 0%, rgba(206,75,223,0.9976365546218487) 100%)"
                            }
                        }}
                        badgeContent={myPlayList.length ? myPlayList.length : '0'}>
                        <Icon sx={{ fontSize: 30 }}>library_music</Icon>
                    </Badge>
                    <Icon onClick={() => dispatch(clearPlayList())}
                        sx={{
                            fontSize: 30,
                            color: red[300],
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in',
                            "&:hover": {
                                color: red[700]
                            }
                        }}>
                        delete
                    </Icon>
                </Box>
            </Box>
            <Footer></Footer>
        </Box >
    );
};

export default AllSongs;
