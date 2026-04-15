import { useParams } from 'react-router-dom';
import { songs } from './SongList'

export default function SongDetails() {
    const { id } = useParams();
    const song = songs.find(s => s.id === Number(id));

    if (!song) {
        return <p>Song not found</p>;
    }

    return (
        <div>
            <h2>{song.title}</h2>
            <p>Artist: {song.artist}</p>
        </div>
    )
}
