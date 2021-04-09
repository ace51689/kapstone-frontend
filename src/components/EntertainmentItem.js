import React from 'react'

const EntertainmentItem = (props) => {

  console.log(props)

  return (
    <li>
      {props.title}
      &nbsp;
      Released: {props.release_date}
      &nbsp;
      Average Rating: {props.vote_average}
    </li>
  )
}

export default EntertainmentItem
