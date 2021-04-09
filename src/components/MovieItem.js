import React from 'react'

const MovieItem = (props) => {

  console.log(props)

  return (
    <>
      <li>
        {props.title}
        <br />
      Released: {props.release_date}
      &nbsp;
      Average Rating: {props.vote_average}
        <br />
        {props.overview}
      </li>
      <br />
    </>
  )
}

export default MovieItem