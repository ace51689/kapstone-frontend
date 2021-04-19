import React, { useEffect, useState } from "react";
import { getMovie, getMovieCredits, getMovieProviders} from "../fetch requests/tmdbRequests";
import { Card } from "react-bootstrap";

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [watchProviders, setWatchProviders] = useState({
    streaming: undefined,
    rent: undefined,
    buy: undefined,
    none: undefined
  });
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovie(props.match.params.movieId).then((res) => setMovie(res));
    getMovieProviders(props.match.params.movieId).then((res) => {
      console.log(res.results);
      if (Object.keys(res.results).length !== 0) {
        setWatchProviders({
          stream: res.results.US.flatrate,
          rent: res.results.US.rent,
          buy: res.results.US.buy,
          none: undefined,
        });
      } else {
        setWatchProviders({
          stream: undefined,
          rent: undefined,
          buy: undefined,
          none: null
        });
      }
    });

    getMovieCredits(props.match.params.movieId).then((res) => {
      setCrew(res.crew);
      setCast(res.cast);
    });
  }, [props.match.params.movieId]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>{movie.original_title}</h1>
          </Card.Title>
          <Card.Text>
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
          </Card.Text>
          <Card>
            <Card.Text>
              {<h3>Watch Providers:</h3>}
              <ul className="watch-providers">
                {watchProviders.stream && <h4>Streaming:</h4>}
                {watchProviders.stream &&
                  watchProviders.stream.map((provider) => {
                    return (
                      <li key={provider.provider_id}>
                        {provider.provider_name}
                      </li>
                    );
                  })}
                {watchProviders.rent && <h4>Rent:</h4>}
                {watchProviders.rent &&
                  watchProviders.rent.map((provider) => {
                    return (
                      <li key={provider.provider_id}>
                        {provider.provider_name}
                      </li>
                    );
                  })}
                {watchProviders.buy && <h4>Buy:</h4>}
                {watchProviders.buy &&
                  watchProviders.buy.map((provider) => {
                    return (
                      <li key={provider.provider_id}>
                        {provider.provider_name}
                      </li>
                    );
                  })}
                {watchProviders.none === null && (
                  <div>
                    There are no currently known watch providers. Please try
                    again at a later date.
                  </div>
                )}
              </ul>
            </Card.Text>
          </Card>
          <Card>
            <Card.Text>
              <ul>
                <h3>Executive Producers:</h3>
                {crew.map((crew) => {
                  if (crew.job === "Executive Producer") {
                    return <li key={crew.id}>{crew.name}</li>;
                  }
                  return false;
                })}
                <h3>Director:</h3>
                {crew.map((crew) => {
                  if (crew.job === "Director") {
                    return <h5 key={crew.id}>{crew.name}</h5>;
                  }
                  return false;
                })}
              </ul>
            </Card.Text>
          </Card>
        </Card.Body>
        <img
          src={movie.poster_path && baseUrl + movie.poster_path}
          alt={`This is the theatrical poster for ${movie.original_title}`}
        />
      </Card>
      <Card>
        <h3>Cast:</h3>
        {cast.map((cast) => {
          return (
            <div key={cast.id}>
              <img
                src={baseUrl + cast.profile_path}
                alt={`This is ${cast.name}`}
              />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default MoviePage;
