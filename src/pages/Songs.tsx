import { Routes, Route, Link } from 'react-router-dom';
import SongDetails from './SongDetails';

type Song = {
  id: number;
  title: string;
  artist: string;
};

const songs: Song[] = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
  { id: 3, title: 'Levitating', artist: 'Dua Lipa' },
];

function SongList() {
  return (
    <div>
      <h2>Songs</h2>
      {songs.map((song) => (
        <Link to={`/Songs/${song.id}`} key={song.id}>
          <h3>{song.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default SongList;
