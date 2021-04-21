import React from 'react'
import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <div> 
      <h1>This would be your home page, currently under construction.</h1>
      <br/>
      Link to: <Link to="/browse">Browse Entertainmnet</Link>
      <br />
      Link to: <Link to="/search">Search Entertainment</Link>

      <div>
        <h2>
          Continue Watching?
        </h2>
        <h4> Movies/shows that have been watched will go here</h4>
      </div>
    </div>

  )
}
 

export default Home
