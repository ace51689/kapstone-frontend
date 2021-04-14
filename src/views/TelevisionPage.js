import React, { useEffect, useState } from "react";
import { getTelevision, getTelevisionCredits } from "../fetch requests/tmdbRequests";

const TelevisionPage = (props) => {
  const [television, setTelevision] = useState({});
  const [credits, setCredits] = useState({})
  const [watchProviders, setWatchProviders] = useState({})
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getTelevision(props.match.params.tvId).then((res) => setTelevision(res));
    getTelevisionCredits(props.match.params.tvId).then((res) => setCredits(res));
    //Write up a "getWatchProviders" api call then store the response in state using setWatchProviders(res)
  }, []);

  return (
    <>
      <h1>{television.name}</h1>
      <h3>{television.tagline}</h3>
      <img src={television.poster_path && baseUrl + television.poster_path} />
      <p>{television.overview}</p>
    </>
  );
};

export default TelevisionPage;