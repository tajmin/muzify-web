import { useEffect, useState } from "react"

const useSongs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/songs')
            .then(res => res.json())
            .then(data => setSongs(data))
    }, [])

    return { songs };
}

export default useSongs;