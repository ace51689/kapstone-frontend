import React, { useState } from 'react'
import MovieItem from "./MovieItem"
import TelevisionItem from "./TelevisionItem"
import PaginationComponent from "./PaginationComponent"
import { multiSearch } from "../fetch requests/tmdbRequests"
import { Form, Button } from "react-bootstrap"
import { useStore, SET_SEARCH, SET_SEARCH_QUERY, SET_SEARCH_PAGE } from '../store/store'

const MultiSearch = () => {
  const dispatch = useStore((state) => state.dispatch)
  const entertainment = useStore((state) => state.search.results)
  const totalPages = useStore((state) => state.search.total_pages)
  const searchQuery = useStore((state) => state.searchQuery)
  const searchPage = useStore((state) => state.searchPage)
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    multiSearch(query.trim(), searchPage).then((res) => {
      if (res.total_pages > 0) {
        dispatch({ type: SET_SEARCH, payload: res})
        dispatch({ type: SET_SEARCH_QUERY, payload: query.trim()})
        setQuery("")
      } else {
        alert("Sorry, there were no results for that term. Please Try again.")
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control onChange={handleChange} type="text" value={query} placeholder="Enter your search term here" />
        <Button type="submit">Search</Button>
      </Form>
      {searchQuery && <PaginationComponent pages={totalPages} setType={SET_SEARCH} pageType={SET_SEARCH_PAGE} apiCall={multiSearch}/>}
      <ul>
        {
          entertainment ? entertainment.map((item) => {
            if (item.media_type === "movie") {
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
          }) : <div>Loading Entertainment...</div>
        }
      </ul>
    </div>
  )
}

export default MultiSearch
