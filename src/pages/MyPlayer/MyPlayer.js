import { Button, Drawer, Grid, Icon, IconButton, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LibrarySong from '../../components/LibrarySong/LibrarySong';
import Player from '../../components/Player/Player';
import Song from '../../components/Song/Song';
import { fetchAllSongs } from '../../redux/slices/songSlice';
import spinner from '../../images/spinner.gif'

const MyPlayer = () => {
    const songs = useSelector((state) => state.songs.songs);
    const isLoading = useSelector((state) => state.songs.isLoading);
    const dispatch = useDispatch();
    const [currentSong, setCurrentSong] = useState();
    const [drawerState, setDrawerState] = React.useState(false);
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        dispatch(fetchAllSongs())
        setCurrentSong(songs[0])
    }, [])

    const drawer = (
        <Box onClick={() => setDrawerState(false)} sx={{ width: { xs: 225, lg: 400 } }} role="presentation">
            <Button>Home</Button>
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
                    Library
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

export default MyPlayer;