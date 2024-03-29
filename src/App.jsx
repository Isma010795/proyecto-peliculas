import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRoutes } from "./routers/routes"
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);




  return (
    <div>
      <header>

      </header>
      <MyRoutes movies={movies} />
    </div>

  );
}

export default App



