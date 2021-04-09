import React, { useEffect, useState } from 'react'
import EntertainmentItem from "../components/EntertainmentItem"
import { getEntertainment } from "../fetch requests/tmdbRequests"

const EntertainmentList = (props) => {
  const [state, setState] = useState({entertainment:[]})
  const [medium, setMedium] = useState("tv")
  const [sortBy, setSortBy] = useState("popular")

  useEffect(() => {
    getEntertainment(medium, sortBy)
      .then((res) => setState({
        entertainment: res.results
      }))
  }, [medium, sortBy])


  return (
    <ul>
      {state ? state.entertainment.map((item) => (
        <EntertainmentItem
          {...item}
          key={item.id}
        />
      )) : <div>Loading Movies...</div>}
    </ul>
  )
}

export default EntertainmentList
