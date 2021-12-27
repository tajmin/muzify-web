import { Box, Button, Drawer, Grid, Icon } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LibrarySong from '../../components/LibrarySong/LibrarySong';
import Player from '../../components/Player/Player';
import Song from '../../components/Song/Song';
import useAuth from '../../hooks/useAuth';
import spinner from '../../images/spinner.gif'
import { clearPlayList } from '../../redux/slices/songSlice';

const MyPlaylist = () => {
    const songs = useSelector((state) => state.songs.myPlaylist);
    const { isLoading } = useAuth;
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [drawerState, setDrawerState] = React.useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useDispatch();


    const drawer = (
        <Box onClick={() => setDrawerState(false)} sx={{ width: { xs: 225, lg: 400 } }} role="presentation">
            <Button onClick={() => dispatch(clearPlayList())}
                sx={{
                    my: 2,
                    ml: 1,
                    border: '1px solid black',
                    color: 'black',
                    transition: 'all 0.3s ease-out',
                    '&:hover': {
                        border: '1px solid black',
                        backgroundColor: 'black',
                        color: 'white',
                    }
                }}
                variant="outlined" endIcon={<Icon>delete</Icon>}>
                Clear
            </Button>

            <Button component={Link} to={'/'}
                sx={{
                    my: 2,
                    float: 'right',
                    mr: 1,
                    border: '1px solid black',
                    color: 'black',
                    transition: 'all 0.3s ease-out',
                    '&:hover': {
                        border: '1px solid black',
                        backgroundColor: 'black',
                        color: 'white',
                    }
                }}
                variant="outlined">
                Home
            </Button>
            <Grid container spacing={1}>
                {
                    songs?.map(song => <Grid key={song._id} item xs={12}>
                        <LibrarySong
                            song={song}
                            songs={songs}
                            setCurrentSong={setCurrentSong}
                        ></LibrarySong>
                    </Grid>)
                }
            </Grid>
        </Box>
    );

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
        <Box sx={{ position: 'relative' }}>

            {/* Drawer Button */}
            <Box sx={{ position: 'absolute', top: '2%', right: '2%' }}>
                <Button
                    onClick={() => setDrawerState(true)}
                    className='gradientThemeBg'
                    sx={{ py: 1 }}
                    variant="contained"
                    endIcon={<Icon>library_music</Icon>}>
                    Playlist
                </Button>
            </Box>

            {/* Components */}
            <Song currentSong={currentSong}></Song>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}></Player>

            {/* Drawer Fragment */}
            <React.Fragment>
                <Drawer open={drawerState} anchor='left' onClose={() => setDrawerState(false)} >
                    {drawer}
                </Drawer>
            </React.Fragment>
        </Box>
    );
};

export default MyPlaylist;