import React, { useEffect, useState } from "react";
import { getMovie, getMovieCredits, getMovieProviders } from "../fetch requests/tmdbRequests";

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [watchProviders, setWatchProviders] = useState({})
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    getMovie(props.match.params.movieId).then((res) => setMovie(res));
    getMovieProviders(props.match.params.movieId).then((res) => {
      setWatchProviders(res.results.US)
    });
    getMovieCredits(props.match.params.movieId).then((res) => {
      setCrew(res.crew)
      setCast(res.cast)
    })
  }, [props.match.params.movieId]);


  return (
    <>
      <h1>{movie.original_title}</h1>
      <h3>{movie.tagline}</h3>
      <img src={movie.poster_path && baseUrl + movie.poster_path} alt={`This is the theatrical poster for ${movie.original_title}`} />
      <p>{movie.overview}</p>

      <h3>Watch Providers:</h3>
      <ul className="watch-providers">
        <h4>Streaming:</h4>
        {
          watchProviders.flatrate ? watchProviders.flatrate.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          }) : <></>
        }
        <h4>Rent:</h4>
        {
          watchProviders.rent ? watchProviders.rent.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          }) : <></>
        }
        <h4>Buy:</h4>
        {
          watchProviders.buy ? watchProviders.buy.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          }) : <></>
        }
      </ul>

      <ul>
        <h3>Executive Producers:</h3>
        {crew.map((crew) => {
          if (crew.job === "Executive Producer") {
            return <li key={crew.id}>{crew.name}</li>;
          }
          return false
        })}
        <h3>Director:</h3>
        {crew.map((crew) => {
          if (crew.job === "Director") {
            return <h5 key={crew.id}>{crew.name}</h5>;
          }
          return false
        })}
        <h3>Cast:</h3>
        {cast.map((cast) => {
          return (
            <div key={cast.id}>
              <img src={baseUrl + cast.profile_path} alt={`This is ${cast.name}`} />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default MoviePage;

