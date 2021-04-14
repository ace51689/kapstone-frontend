const base_URL = "https://api.themoviedb.org/3/"
const APIKey = "?api_key=6788151fd970b8ef2326538cd7e0ad87"
const enUS = "&language=en-US"
const pageParam = "&page="

export const getEntertainment = (medium, sortType, page) => {
  return fetch(base_URL + medium + "/" + sortType + APIKey + enUS + pageParam + page, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getMovie = (movieId) => {
  return fetch(base_URL + "movie/" + movieId + APIKey + enUS, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getMovieCredits = (movieId) => {
  return fetch(base_URL + "movie/" + movieId + "/credits" + APIKey + enUS, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getTelevision = (tvId) => {
  return fetch(base_URL + "tv/" + tvId + APIKey + enUS, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getTelevisionCredits = (tvId) => {
  return fetch(base_URL + "tv/" + tvId + "/credits" + APIKey + enUS, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};