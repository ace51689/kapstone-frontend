import React from 'react'
import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <div>
      This would be your home page, currently under construction.
      <br/>
      Link to: <Link to="/browse">Browse Entertainmnet</Link>
      <br/>
      Link to: <Link to="/movie">Movie Page Template</Link>
    </div>
  )
}

export default Home