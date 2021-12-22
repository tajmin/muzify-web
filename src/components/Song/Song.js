import { Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';

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
                <img className="album-cover" src={currentSong?.cover} alt="album cover" />
                <Typography variant="h4" component="div" fontSize={{ lg: 50, xs: 25 }}
                    sx={{
                        fontWeight: 'bold',
                        color: textBluGrey,
                        marginTop: 4
                    }}
                >
                    {currentSong?.title}
                </Typography>
                <Typography variant="h6" component="div" fontSize={{ lg: 25, xs: 15 }}
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