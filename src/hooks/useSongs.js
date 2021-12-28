import { useEffect, useState } from "react"

const useSongs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-brook-63531.herokuapp.com/songs')
            .then(res => res.json())
            .then(data => setSongs(data))
    }, [])

    return { songs };
}

export default useSongs;