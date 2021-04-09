import React, { useEffect, useState } from 'react'
import EntertainmentItem from "../components/EntertainmentItem"
import { getMoviesPopular } from "../fetch requests/tmdbRequests"

const EntertainmentList = (props) => {
  const [state, setState] = useState({movies:[]})

  useEffect(() => {
    getMoviesPopular()
      .then((res) => setState({
        movies: res.results
      }))
  }, [])


  return (
    <ul>
      {state ? state.movies.map((movie) => (
        <EntertainmentItem
          {...movie}
          key={movie.id}
        />
      )) : <div>Loading Movies...</div>}
    </ul>
  )
}

export default EntertainmentList
