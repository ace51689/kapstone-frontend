import React from 'react'

const EntertainmentItem = (props) => {

  console.log(props)

  return (
    <li>
      {props.name}
      &nbsp;
      Released: {props.first_air_date}
      &nbsp;
      Average Rating: {props.vote_average}
    </li>
  )
}

export default EntertainmentItem
