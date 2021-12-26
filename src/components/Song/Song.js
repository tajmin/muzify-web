import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';
import musicSign from '../../images/music_placeholder.png'

const Song = ({ currentSong }) => {
    const textBluGrey = blueGrey[800];
    return (
        <>
            <Box sx={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2
            }}>
                <img className="album-cover" src={currentSong ? currentSong?.cover : musicSign} alt="album cover" />
                <Typography variant="h1" component="div" fontSize={{ lg: 50, xs: 25 }}
                    sx={{
                        fontWeight: 'bold',
                        color: textBluGrey,
                        marginTop: 4
                    }}
                >
                    {currentSong ? currentSong?.title : 'Please select a song'}
                </Typography>
                <Typography variant="h2" component="div" fontSize={{ lg: 20, xs: 15 }}
                    sx={{
                        fontWeight: 'bold',
                        color: textBluGrey,
                        paddingBottom: 4
                    }}
                >
                    {currentSong?.artist}
                </Typography>
            </Box>
        </>
    );
};

export default Song;