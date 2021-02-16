import React, { useContext, useEffect } from "react";
import CardGrid from "./CardGrid";
import MovieCard from "./MovieCard";
import { MyContext } from "../Context/MyContext";
// const axios = require("axios");
import axios from "axios";

const Movies = () => {
  const contextData = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      contextData.setLoading(true);
      const res = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=${contextData.searchTerm}&sort_by=rating&limit=5`
      );
      console.log(res.data.data.movies);
      contextData.setMovies(res.data.data.movies);
      contextData.setLoading(false);
    };

    fetchData();
  }, [contextData.searchTerm]);

  return (
    <div>
      {contextData.movies ? (
        <CardGrid
          children={contextData.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              cover={movie.medium_cover_image}
            />
          ))}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Movies;
