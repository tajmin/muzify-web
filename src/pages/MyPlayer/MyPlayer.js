import React, { useEffect, useState } from 'react';
import Player from '../../components/Player/Player';
import Song from '../../components/Song/Song';
import useSongs from '../../hooks/useSongs';

const MyPlayer = () => {
    const { songs } = useSongs();
    const [currentSong, setCurrentSong] = useState();
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setCurrentSong(songs[0])
    }, [songs])

    return (
        <div>
            <Song currentSong={currentSong}></Song>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}></Player>
        </div>
    );
};

export default MyPlayer;