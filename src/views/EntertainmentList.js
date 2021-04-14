import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'
import TelevisionItem from "../components/TelevisionItem"
import { getEntertainment } from "../fetch requests/tmdbRequests"
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"
import "./views.css"

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
      <div className="sort-and-nav">

        <ButtonToolbar>

          <ButtonGroup size="sm">

            <Button className="mr-1" onClick={(e) => {
              setMedium("movie")
              setSortBy("popular")
              setPage(1)
            }}>Movies</Button>

            <Button className="mr-3" onClick={(e) => {
              setMedium("tv")
              setSortBy("popular")
              setPage(1)
            }}>Televison</Button>
          </ButtonGroup>

          <ButtonGroup size="sm">

            <Button className="mr-1" onClick={(e) => setSortBy("popular")}>Popular</Button>
            <Button className="mr-1" onClick={(e) => setSortBy("top_rated")}>Top Rated</Button>
            {
              medium === "movie" ?
                <Button className="mr-1" onClick={(e) => setSortBy("now_playing")}>Now Playing</Button>
                :
                <Button className="mr-1" onClick={(e) => setSortBy("airing_today")}>Airing Today</Button>
            }
            {
              medium === "movie" ?
                <Button className="mr-3" onClick={(e) => setSortBy("upcoming")}>Upcoming</Button>
                :
                <Button className="mr-3" onClick={(e) => setSortBy("on_the_air")}>On The Air</Button>
            }

          </ButtonGroup>

          <ButtonGroup size="sm">
            <Button
              className="mr-1"
              onClick={(e) => setPage(page > 1 ? page - 1 : page)}
            >{"<"}</Button>
            <Button className="mr-1" onClick={(e) => setPage(1)}>1</Button>
            <Button className="mr-1" onClick={(e) => setPage(2)}>2</Button>
            <Button className="mr-1" onClick={(e) => setPage(3)}>3</Button>
            <Button className="mr-1" onClick={(e) => setPage(4)}>4</Button>
            <Button className="mr-1" onClick={(e) => setPage(5)}>5</Button>
            <Button className="mr-1" onClick={(e) => setPage(6)}>6</Button>
            <Button className="mr-1" onClick={(e) => setPage(7)}>7</Button>
            <Button className="mr-1" onClick={(e) => setPage(8)}>8</Button>
            <Button className="mr-1" onClick={(e) => setPage(9)}>9</Button>
            <Button className="mr-1" onClick={(e) => setPage(10)}>10</Button>
            <Button onClick={(e) =>
              setPage(page < 10 ? page + 1 : page)}
            >{">"}</Button>
          </ButtonGroup>
        </ButtonToolbar>

      Now Displaying: {medium}, Sorted By: {sortBy}, Page: {page}
      </div>

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
