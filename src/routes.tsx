import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SongDetails from './pages/SongDetails';
import NotFound from './pages/NotFound';
import SongList from './pages/SongList';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SongList" element={<SongList />} />
      <Route path="/SongList/:id" element={<SongDetails />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
