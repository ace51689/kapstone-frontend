import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ListItem.css'
import unknownPoster from "../assets/Unknown-Poster.jpg"

const MovieItem = (props) => {

  return (
    <>
      <li>
        <Card>
          <Card.Header>
            <Link to={"/movie/" + props.id}>
              {
                props.poster_path !== null ?
                  <Card.Img style={{ width: "90px" }} varient="top" src={"https://image.tmdb.org/t/p/original" + props.poster_path} />
                  : <Card.Img style={{ width: "90px" }} varient="top" src={unknownPoster} />
              }
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <Link to={"/movie/" + props.id}>{props.title}</Link>
            </Card.Title>
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