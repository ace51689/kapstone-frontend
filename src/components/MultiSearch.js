import React, { useState } from 'react'
import { multiSearch } from "../fetch requests/tmdbRequests"
import { Form, Button } from "react-bootstrap"

const MultiSearch = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState({})
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = query.trim().replace(" ", "%20")
    multiSearch(searchQuery).then((res) => setResults(res))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Search</Form.Label>
        <Form.Control onChange={handleChange} type="text" value={query} placeholder="Enter your search term here" />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  )
}

export default MultiSearch
