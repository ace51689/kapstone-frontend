import React from 'react'
import { Card } from "react-bootstrap"

const TelevisionItem = (props) => {

  console.log(props)

  return (
    <>
      <li>
      <Card>
        <Card.Img varient="top" src={"https://image.tmdb.org/t/p/original" + props.poster_path} />
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Released: {props.first_air_date}
            &nbsp;
            Average Rating: {props.vote_average}
        </Card.Text>
        <Card.Text>
          {props.overview}
        </Card.Text>
      </Card>
      </li>
    
    </>
  )
}

export default TelevisionItem
