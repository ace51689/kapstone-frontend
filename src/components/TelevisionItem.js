import React from 'react'

const TelevisionItem = (props) => {

  console.log(props)

  return (
    <>
      <li>
        {props.name}
        <br />
      Released: {props.first_air_date}
      &nbsp;
      Average Rating: {props.vote_average}
        <br />
        {props.overview}
      </li>
      <br />
    </>
  )
}

export default TelevisionItem
