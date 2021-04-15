import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ListItem.css"

const TelevisionItem = (props) => {

  return (
    <>
      <li>
        <Card>
          <Card.Header>
            <Link to={"/tv/" + props.id}>
              <Card.Img style={{ width: "90px" }} varient="top" src={"https://image.tmdb.org/t/p/original" + props.poster_path} />
            </Link>
          </Card.Header>
          <Card.Body>
            <Link to={"/tv/" + props.id}>
              <Card.Title>{props.name}</Card.Title>
            </Link>
            <Card.Text>
              Released: {props.first_air_date}
            &nbsp;
            Average Rating: {props.vote_average}
            </Card.Text>
            <Card.Text>
              {props.overview}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </li>

    </>
  )
}

export default TelevisionItem
