import React, { useEffect, useState } from "react";
import { getTelevision, getTelevisionCredits, getTelevisionProviders } from "../fetch requests/tmdbRequests";

const TelevisionPage = (props) => {
  const [television, setTelevision] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [watchProviders, setWatchProviders] = useState({
    streaming: undefined,
    rent: undefined,
    buy: undefined,
    none: undefined
  })
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getTelevision(props.match.params.tvId).then((res) => setTelevision(res));

    getTelevisionProviders(props.match.params.tvId).then((res) => {
      if (Object.keys(res.results).length !== 0) {
        setWatchProviders({
          stream: res.results.US.flatrate,
          rent: res.results.US.rent,
          buy: res.results.US.buy,
          none: undefined
        })
      }
      else {
        setWatchProviders({
          stream: undefined,
          rent: undefined,
          buy: undefined,
          none: null
        })
      }
    });

    getTelevisionCredits(props.match.params.tvId).then((res) => {
      setCrew(res.crew)
      setCast(res.cast)
    })
  }, [props.match.params.tvId]);

  return (
    <>
      <h1>{television.name}</h1>
      <h3>{television.tagline}</h3>
      <img src={television.poster_path && baseUrl + television.poster_path} alt={`This is the official poseter for ${television.name} `} />
      <p>{television.overview}</p>

      {<h3>Watch Providers:</h3>}
      <ul className="watch-providers">
        {watchProviders.stream && <h4>Streaming:</h4>}
        {
          watchProviders.stream && watchProviders.stream.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          })
        }
        {watchProviders.rent && <h4>Rent:</h4>}
        {
          watchProviders.rent && watchProviders.rent.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          })
        }
        {watchProviders.buy && <h4>Buy:</h4>}
        {
          watchProviders.buy && watchProviders.buy.map((provider) => {
            return <li key={provider.provider_id}>{provider.provider_name}</li>
          })
        }
        {watchProviders.none === null && <div>There are no currently known watch providers. Please try again at a later date.</div>}
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
            return <h5>{crew.name}</h5>;
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

export default TelevisionPage;