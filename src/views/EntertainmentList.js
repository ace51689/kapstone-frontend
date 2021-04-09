import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'
import TelevisionItem from "../components/TelevisionItem"
import { getEntertainment } from "../fetch requests/tmdbRequests"

const EntertainmentList = (props) => {
  const [state, setState] = useState({ entertainment: [] })
  const [medium, setMedium] = useState("movie")
  const [sortBy, setSortBy] = useState("popular")

  useEffect(() => {
    getEntertainment(medium, sortBy)
      .then((res) => setState({
        entertainment: res.results
      }))
  }, [medium, sortBy])


  return (
    <>
      <button onClick={(e) => {
          setMedium("movie")
          setSortBy("popular")
        }}>Movies</button>
      
      <button onClick={(e) => {
        setMedium("tv")
        setSortBy("popular")
      }}>Televison</button>
      
      <br />
      <button onClick={(e) => setSortBy("popular")}>Popular</button>
      <button onClick={(e) => setSortBy("top_rated")}>Top Rated</button>
      {
        medium === "movie" ?
          <button onClick={(e) => setSortBy("now_playing")}>Now Playing</button>
          :
          <button onClick={(e) => setSortBy("airing_today")}>Airing Today</button>
      }
      {
        medium === "movie" ?
          <button onClick={(e) => setSortBy("upcoming")}>Upcoming</button>
          :
          <button onClick={(e) => setSortBy("on_the_air")}>On The Air</button>
      }
      <ul>
        {state ? state.entertainment.map((item) => {
          if (medium === "movie") {
            return <MovieItem
              {...item}
              key={item.id}
            />
          } else {
            return <TelevisionItem
              {...item}
              key={item.id}
            />
          }
        }) : <div>Loading Entertainment...</div>}
      </ul>
    </>
  )
}

export default EntertainmentList
