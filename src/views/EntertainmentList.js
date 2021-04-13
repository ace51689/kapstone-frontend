import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'
import TelevisionItem from "../components/TelevisionItem"
import { getEntertainment } from "../fetch requests/tmdbRequests"

const EntertainmentList = (props) => {
  const [state, setState] = useState({ entertainment: [] })
  const [medium, setMedium] = useState("movie")
  const [sortBy, setSortBy] = useState("popular")
  const [page, setPage] = useState(1)

  useEffect(() => {
    getEntertainment(medium, sortBy, page)
      .then((res) => setState({
        entertainment: res.results
      }))
  }, [medium, sortBy, page])

  return (
    <>
      <button onClick={(e) => {
        setMedium("movie")
        setSortBy("popular")
        setPage(1)
      }}>Movies</button>

      <button onClick={(e) => {
        setMedium("tv")
        setSortBy("popular")
        setPage(1)
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
      
      <br />
      
      <button onClick={(e) => setPage(
        page > 1 ? page - 1 : page
      )}>{"<"}</button>
      <button onClick={(e) => setPage(1)}>1</button>
      <button onClick={(e) => setPage(2)}>2</button>
      <button onClick={(e) => setPage(3)}>3</button>
      <button onClick={(e) => setPage(4)}>4</button>
      <button onClick={(e) => setPage(5)}>5</button>
      <button onClick={(e) => setPage(6)}>6</button>
      <button onClick={(e) => setPage(7)}>7</button>
      <button onClick={(e) => setPage(8)}>8</button>
      <button onClick={(e) => setPage(9)}>9</button>
      <button onClick={(e) => setPage(10)}>10</button>
      <button onClick={(e) => setPage(
        page < 10 ? page + 1 : page
      )}>{">"}</button>

      <br />

      Now Displaying: {medium}, Sorted By: {sortBy}, Page: {page}

      <br/>

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
