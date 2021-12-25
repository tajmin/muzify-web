import { Button, Drawer, Grid, Icon, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import LibrarySong from '../../components/LibrarySong/LibrarySong';
import Player from '../../components/Player/Player';
import Song from '../../components/Song/Song';
import useSongs from '../../hooks/useSongs';

const MyPlayer = () => {
    const { songs } = useSongs();
    const [currentSong, setCurrentSong] = useState();
    const [drawerState, setDrawerState] = React.useState(false);
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setCurrentSong(songs[0])
    }, [songs])

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

    return (
        <div>
            {/* Drawer Button */}
            <IconButton
                onClick={() => setDrawerState(true)}
                size="large" edge="start"
                color="inherit"
                aria-label="menu"
            >
                <Icon>menu</Icon>
            </IconButton>


            {/* Components */}
            <Song currentSong={currentSong}></Song>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}></Player>

            {/* Drawer Fragment */}
            <React.Fragment>
                <Drawer open={drawerState} anchor='left' onClose={() => setDrawerState(false)} >
                    {drawer}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default MyPlayer;