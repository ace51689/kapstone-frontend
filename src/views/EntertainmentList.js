import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'
import TelevisionItem from "../components/TelevisionItem"
import { getEntertainment } from "../fetch requests/tmdbRequests"
import { useStore, SET_MEDIUM, SET_SORT_BY, SET_PAGE } from "../store/store"
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"
import "./views.css"

const EntertainmentList = (props) => {
  const [state, setState] = useState({ entertainment: [] })
  const dispatch = useStore((state) => state.dispatch)
  const medium = useStore((state) => state.medium)
  const sortBy = useStore((state) => state.sortBy)
  const page = useStore((state) => state.page)

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
              dispatch({ type: SET_MEDIUM, payload: "movie"})
              dispatch({ type: SET_SORT_BY, payload: "popular" })
              dispatch({ type: SET_PAGE, payload: "1" })
            }}>Movies</Button>

            <Button className="mr-3" onClick={(e) => {
              dispatch({ type: SET_MEDIUM, payload: "tv" })
              dispatch({ type: SET_SORT_BY, payload: "popular" })
              dispatch({ type: SET_PAGE, payload: "1" })
            }}>Televison</Button>
          </ButtonGroup>

          <ButtonGroup size="sm">

            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "popular" })}>Popular</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "top_rated" })}>Top Rated</Button>
            {
              medium === "movie" ?
                <Button className="mr-1" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "now_playing" })}>Now Playing</Button>
                :
                <Button className="mr-1" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "airing_today" })}>Airing Today</Button>
            }
            {
              medium === "movie" ?
                <Button className="mr-3" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "upcoming" })}>Upcoming</Button>
                :
                <Button className="mr-3" onClick={(e) => dispatch({ type: SET_SORT_BY, payload: "on_the_air" })}>On The Air</Button>
            }

          </ButtonGroup>

          <ButtonGroup size="sm">
            <Button
              className="mr-1"
              onClick={(e) => dispatch({ type: SET_PAGE, payload: (page > 1 ? page - 1 : page) })}
            >{"<"}</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 1 })}>1</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 2 })}>2</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 3 })}>3</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 4 })}>4</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 5 })}>5</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 6 })}>6</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 7 })}>7</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 8 })}>8</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 9 })}>9</Button>
            <Button className="mr-1" onClick={(e) => dispatch({ type: SET_PAGE, payload: 10 })}>10</Button>
            <Button onClick={(e) =>
              dispatch({ type: SET_PAGE, payload: (page < 10 ? page + 1 : page) })}
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
