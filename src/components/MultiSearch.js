import React, { useState } from 'react'
import MovieItem from "./MovieItem"
import TelevisionItem from "./TelevisionItem"
import { multiSearch } from "../fetch requests/tmdbRequests"
import { Form, Button } from "react-bootstrap"
import { useStore, SET_SEARCH } from '../store/store'

const MultiSearch = () => {
  const dispatch = useStore((state) => state.dispatch)
  const entertainment = useStore((state) => state.search)
  const [query, setQuery] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [resObject, setResObject] = useState({
    object: {},
  })

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = query.trim().replace(" ", "%20")
    multiSearch(search).then((res) => {
      if (res.page) {
        setResObject({
          object: res,
        })
        dispatch({ type: SET_SEARCH, payload: res.results})
        setSearchQuery(search)
        setQuery("")
      }
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Search</Form.Label>
        <Form.Control onChange={handleChange} type="text" value={query} placeholder="Enter your search term here" />
        <Button type="submit">Search</Button>
      </Form>
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
