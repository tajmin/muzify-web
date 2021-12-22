import { Typography, Grid } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

const LibrarySong = ({ props }) => {
    const { title, cover, artist } = props;
    const textBluGrey = blueGrey[700];
    const bgBlueGrey = grey[50];
    return (
        <>
            <Grid container
                sx={{
                    paddingX: 3,
                    paddingY: 2,
                    backgroundColor: bgBlueGrey,
                    boxShadow: 3,
                    cursor: 'pointer',
                    transition: "all 0.5s",
                    '&:hover': {
                        backgroundColor: blueGrey[100],
                    }
                }}>
                <Grid item xs={5}>
                    <Box>
                        <img style={{ width: '100%' }} src={cover} alt="album cover" />
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h4" fontSize={{ lg: 20, xs: 15 }}
                            sx={{
                                fontWeight: 'bold',
                                color: textBluGrey,
                                wordWrap: "break-word"
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography variant="h6" fontSize={{ lg: 15, xs: 12 }}
                            sx={{
                                fontWeight: 'bold',
                                color: textBluGrey,
                                wordWrap: "break-word"
                            }}
                        >
                            {artist}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default LibrarySong;