import React, { useEffect, useState } from "react";
import { getMovie, getMovieCredits } from "../fetch requests/tmdbRequests";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovie(76341).then((res) => setMovie(res));
    getMovieCredits(76341).then((res) => setCrew(res.crew));
    getMovieCredits(76341).then((res) => setCast(res.cast));
  }, [movie, crew, cast]);

  return (
    <>
      <h1>{movie.original_title}</h1>
      <h3>{movie.tagline}</h3>
      <img src={baseUrl + movie.poster_path} />
      <p>{movie.overview}</p>
      <ul>
        <h3>Executive Producers:</h3>
        {crew.map((crew) => {
          if (crew.job === "Executive Producer") {
            return <li>{crew.name}</li>;
          }
        })}
        <h3>Director:</h3>
        {crew.map((crew) => {
          if (crew.job === "Director") {
            return <h5>{crew.name}</h5>;
          }
        })}
      </ul>
    </>
  );
};
export default MoviePage;
