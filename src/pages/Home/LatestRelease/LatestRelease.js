import React, { useEffect } from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSongs } from '../../../redux/slices/songSlice';
import Single from '../../../components/Single/Single';

const NewRelease = () => {
    const singles = useSelector((state) => state.songs.songs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSongs())
    }, [])

    return (
        <Box sx={{ backgroundColor: '#000', py: 4 }}>
            <Container sx={{ px: 4 }}>
                <Typography variant="h4" component="div" fontSize={{ lg: 20, xs: 15 }}
                    sx={{
                        color: grey[300],
                        pt: 10,
                        pb: 0.5
                    }}
                >
                    Latest Release
                </Typography>
                <Typography variant="h1" component="div" fontSize={{ lg: 50, xs: 25 }}
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
                            </Grid>).slice(0, 3)
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default NewRelease;