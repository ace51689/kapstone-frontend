const base_URL = "https://api.themoviedb.org/3/"
const APIKey = "?api_key=6788151fd970b8ef2326538cd7e0ad87"
const enUS = "&language=en-US"
const page = "&page=1"

export const getEntertainment = (medium, sortType) => {
  return fetch(base_URL + medium + "/" + sortType + APIKey + enUS + page, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())
}