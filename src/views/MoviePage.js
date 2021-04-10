import React, { useEffect, useState } from "react";
import { getMovie } from "../fetch requests/tmdbRequests";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

const movie76341 = {
  adult: false,
  backdrop_path: "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
  belongs_to_collection: {
    id: 8945,
    name: "Mad Max Collection",
    poster_path: "/uuvSvLb3ntGA9B0wx2JskVDSuWi.jpg",
    backdrop_path: "/h4MNLYzr6Cr02iHv3Hpqb9lmTPv.jpg",
  },
  budget: 150000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "https://www.warnerbros.com/movies/mad-max-fury-road",
  id: 76341,
  imdb_id: "tt1392190",
  original_language: "en",
  original_title: "Mad Max: Fury Road",
  overview:
    "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
  popularity: 48.637,
  poster_path: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  production_companies: [
    {
      id: 2537,
      logo_path: null,
      name: "Kennedy Miller Productions",
      origin_country: "AU",
    },
    {
      id: 174,
      logo_path: "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
    {
      id: 41624,
      logo_path: "/wzKxIeQKlMP0y5CaAw25MD6EQmf.png",
      name: "RatPac-Dune Entertainment",
      origin_country: "US",
    },
    {
      id: 79,
      logo_path: "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
      name: "Village Roadshow Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "AU",
      name: "Australia",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
    {
      iso_3166_1: "ZA",
      name: "South Africa",
    },
  ],
  release_date: "2015-05-13",
  revenue: 378858340,
  runtime: 121,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "What a Lovely Day.",
  title: "Mad Max: Fury Road",
  video: false,
  vote_average: 7.5,
  vote_count: 17857,
};

const MoviePage = (props) => {
  const [movie, setMovie] = useState(movie76341);

  //   useEffect(() => {
  //     getMovie(76341).then((res) => console.log(res));
  //   }, [movie]);

  return (
    <>
      <h1>{movie.original_title}</h1>
      <h3>{movie.tagline}</h3>
      <img src={baseUrl + movie.poster_path} />
      <p>{movie.overview}</p>
      <ul></ul>
    </>
  );
};
export default MoviePage;
