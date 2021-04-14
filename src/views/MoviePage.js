import React, { useEffect, useState } from "react";
import { getMovie, getMovieCredits } from "../fetch requests/tmdbRequests";

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({})
  const [watchProviders, setWatchProviders] = useState({})
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovie(props.match.params.movieId).then((res) => setMovie(res));
    getMovieCredits(props.match.params.movieId).then((res) => setCredits(res))
    //Write up a "getWatchProviders" api call then store the response in state using setWatchProviders(res)
  }, []);

  return (
    <>
      <h1>{movie.original_title}</h1>
      <h3>{movie.tagline}</h3>
      <img src={movie.poster_path && baseUrl + movie.poster_path} />
      <p>{movie.overview}</p>
    </>
  );
};

export default MoviePage;

