import React from 'react'
import { Card } from "react-bootstrap"
import './ListItem.css'

const MovieItem = (props) => {

  console.log(props)

  return (
    <>
      <li>
        <Card>
          <Card.Header>
            <Card.Img style={{ width: "90px" }} varient="top" src={"https://image.tmdb.org/t/p/original" + props.poster_path} />
          </Card.Header>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Released: {props.release_date}
            &nbsp;
            Average Rating: {props.vote_average}
            </Card.Text>
            <Card.Text>
              {props.overview}
            </Card.Text>
          </Card.Body>
        </Card>
      </li>
      <br />
    </>
  )
}

export default MovieItem