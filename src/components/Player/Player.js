import React, { useRef, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box, Container, Icon, Typography } from '@mui/material';

const Player = ({ currentSong, setIsPlaying, isPlaying }) => {
    const songRef = useRef(null);
    const [songDetails, setSongDetails] = useState({ currentTime: 0, duration: 0 });

    const handlePlaySong = () => {
        if (isPlaying) {
            songRef.current.pause();
            setIsPlaying(false);
        } else {
            songRef.current.play();
            setIsPlaying(true);
        }
    }

    const handleTimeUpdate = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongDetails({ ...songDetails, currentTime, duration });
    }

    const handleDragSlider = (e) => {
        const currentTime = e.target.value;
        songRef.current.currentTime = currentTime;
        setSongDetails({ ...songDetails, currentTime });
    }

    const getFormattedTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return (
        <Container>
            <Box
                sx={{
                    minHeight: '15vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} >
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            lg: '60%'
                        }, display: 'flex', alignItems: 'center'
                    }} className="time-control">
                    <Typography sx={{ paddingX: 2 }} variant="caption">{getFormattedTime(songDetails.currentTime)}</Typography>
                    <Slider
                        onChange={handleDragSlider}
                        value={songDetails.currentTime}
                        min={0} max={songDetails.duration}
                        aria-label="Default"
                    />
                    <Typography sx={{ paddingX: 2 }} variant="caption">{getFormattedTime(songDetails.duration)}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: {
                            xs: '50%',
                            lg: '30%'
                        }
                    }}
                    className="play-control">
                    <Icon sx={{ fontSize: 40, cursor: 'pointer' }}>skip_previous</Icon>

                    {
                        isPlaying ? <Icon onClick={handlePlaySong}
                            sx={{ fontSize: 60, cursor: 'pointer' }}>pause</Icon>
                            :
                            (<Icon onClick={handlePlaySong}
                                sx={{ fontSize: 60, cursor: 'pointer' }}>play_arrow</Icon>)
                    }
                    <Icon sx={{ fontSize: 40, cursor: 'pointer' }}>skip_next</Icon>
                </Box>
            </Box>
            <audio onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleTimeUpdate} ref={songRef} src={currentSong?.audio}></audio>
        </Container>
    );
};

export default Player;