import React, { useState, useEffect } from "react";
import "./App.css";
const axios = require("axios");

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://yts.mx/api/v2/list_movies.json`);
      console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ul>
        {movies.length}
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} {console.log(movie.torrents[0].url)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
