import React, { useEffect, useState } from "react";
import { getTelevision, getTelevisionCredits, getTelevisionProviders } from "../fetch requests/tmdbRequests";
import { Card, Button } from 'react-bootstrap'
import Navigation from "../components/Navigation"
import unknownUser from "../assets/Unknown-Actor.png"
import unknownPoster from "../assets/Unknown-Poster.jpg"

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
      if (res.results.US !== undefined) {
        console.log(res)
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
      <Navigation />
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>{television.name}</h1>
          </Card.Title>
          <Card.Text>
            <h3>{television.tagline}</h3>
            <p>{television.overview}</p>
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
                {crew.some((member) => member.job === "Executive Producer") && <h3>Executive Producers:</h3>}
                {crew.map((crew) => {
                  if (crew.job === "Executive Producer") {
                    return <li key={crew.id}>{crew.name}</li>;
                  }
                  return false;
                })}
              </ul>
            </Card.Text>
          </Card>
          <Button>Add {television.name} to Favorites</Button>
        </Card.Body>
        {television.poster_path !== null ? <img
          src={television.poster_path && baseUrl + television.poster_path}
          alt={`This is the theatrical poster for ${television.original_title}`}
        /> : <img
          src={unknownPoster}
          alt={`There is no known poster for ${television.original_title}`}
        />}
      </Card>
      <Card>
        <h3>Cast:</h3>
        {cast.map((cast) => {
          if (cast.profile_path !== null) {
            return (
              <div style={{ width: "120px" }} key={cast.id}>
                <img
                  style={{ width: "90px" }}
                  src={baseUrl + cast.profile_path}
                  alt={`This is ${cast.name}`}
                />
                <p style={{ display: "wrap" }}>{cast.name}</p>
                <p>{cast.character}</p>
              </div>
            );
          } else {
            return (
              <div key={cast.id}>
                <img
                  style={{ width: "90px" }}
                  src={unknownUser}
                  alt={`This is ${cast.name}`}
                />
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </div>
            )
          }
        })}
      </Card>
    </>
  );
};

export default TelevisionPage;