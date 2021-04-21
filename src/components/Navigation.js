import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'
import { Nav, Button } from "react-bootstrap"

const Navigation = () => {
  return (
    <Nav className="justify-content-between" activeKey="/home">
        
        &nbsp;
        Kenzie Entertainment DB
      
        <Nav.Item>
          <Link to="/">Home</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Link to="/browse">Browse</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Link to="/search">Search</Link> &nbsp;
      </Nav.Item>
        <Nav.Item>
          <Button variant="link">
            Logout
      </Button> &nbsp;
      </Nav.Item>

    </Nav>
  )
}

export default Navigation
