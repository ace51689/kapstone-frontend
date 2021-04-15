import React, { useEffect, useState } from "react";
import { getTelevision, getTelevisionCredits } from "../fetch requests/tmdbRequests";

const TelevisionPage = (props) => {
  const [television, setTelevision] = useState({});
  const [credits, setCredits] = useState({})
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [watchProviders, setWatchProviders] = useState({})
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getTelevision(props.match.params.tvId).then((res) => setTelevision(res));
    getTelevisionCredits(props.match.params.tvId).then((res) => {
      setCredits(res)
      setCrew(res.crew)
      setCast(res.cast)
    })
    //Write up a "getWatchProviders" api call then store the response in state using setWatchProviders(res)
  }, []);

  return (
    <>
      <h1>{television.name}</h1>
      <h3>{television.tagline}</h3>
      <img src={television.poster_path && baseUrl + television.poster_path} />
      <p>{television.overview}</p>

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

export default TelevisionPage;