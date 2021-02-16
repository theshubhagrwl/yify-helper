import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./components/MovieCard";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import { MyContext, MyContextProvider } from "./Context/MyContext";
const axios = require("axios");

function App() {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const contextData = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      // contextData.setLoading(true);
      // console.log(contextData.loading);
      const res = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=titanic&sort_by=rating&limit=5`
      );
      console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
      // contextData.setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <MyContextProvider>
      <div>
        <Navbar />
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
      </div>
    </MyContextProvider>
  );
}

export default App;
