import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
const axios = require("axios");

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=titanic&sort_by=rating&limit=5`
      );
      console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CardGrid
          children={movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              cover={movie.medium_cover_image}
            />
          ))}
        />
      )}
    </div>
  );
}

export default App;
