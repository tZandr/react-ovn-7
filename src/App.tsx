import { Link } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <h2>React - Övning 7</h2>
        <p>Routing (old)</p>
      </div>

      <div className="assignment">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/SongList">Songs</Link>
        </nav>

        <AppRoutes />
      </div>

      <div>
        <small>Alexander Tjernström, IT-Högskolan JSU25</small>
      </div>
    </>
  );
}


export default App;
