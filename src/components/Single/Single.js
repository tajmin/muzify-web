import { Box, Fab, Icon, Tooltip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToPlayList } from '../../redux/slices/songSlice';

const Single = ({ single }) => {
    const { cover, title } = single;
    const dispatch = useDispatch();
    return (
        <Box>
            <Box
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover .add-btn': {
                        opacity: '1'
                    },
                    '&:hover .cover-image': {
                        opacity: '0.5'
                    }
                }}>
                <img className='cover-image'
                    style={{
                        width: '100%',
                        transition: 'all 0.3s ease-in'
                    }}
                    src={cover}
                    alt="album cover"
                />
                <Tooltip onClick={() => dispatch(addToPlayList(single))} title="Add to Playlist" placement="top">
                    <Fab className='add-btn gradientThemeBg'
                        sx={{
                            transition: 'all 0.3s ease-in',
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            right: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        color="primary"
                        aria-label="add">
                        <Icon>add</Icon>
                    </Fab>
                </Tooltip>
            </Box>
            <Typography variant="h4" component="div" fontSize={{ lg: 25, xs: 20 }}
                sx={{
                    color: grey[300],
                    pt: 2
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default Single;