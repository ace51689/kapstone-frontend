import React, { useEffect, useState } from "react";
import { getMovie, getMovieCredits } from "../fetch requests/tmdbRequests";

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({})
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [watchProviders, setWatchProviders] = useState({})
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovie(props.match.params.movieId).then((res) => setMovie(res));
    getMovieCredits(props.match.params.movieId).then((res) => {
      setCredits(res)
      setCrew(res.crew)
      setCast(res.cast)
    })
    //Write up a "getWatchProviders" api call then store the response in state using setWatchProviders(res)
  }, []);


  return (
    <>
      <h1>{movie.original_title}</h1>
      <h3>{movie.tagline}</h3>
      <img src={movie.poster_path && baseUrl + movie.poster_path} />
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
        <h3>Cast:</h3>
        {cast.map((cast) => {
          return (
            <>
              <img src={baseUrl + cast.profile_path} />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default MoviePage;

