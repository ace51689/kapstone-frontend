import React, { useState, useEffect } from 'react'
import { useStore } from "../store/store"
import { Pagination } from "react-bootstrap"
import "./PaginationComponent.css"

const PaginationComponent = (props) => {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const dispatch = useStore((state) => state.dispatch)
  const page = useStore((state) => state.searchPage)
  const searchQuery = useStore((state) => state.searchQuery)

  const handleChangePage = (e, number) => {
    props.apiCall(searchQuery, number).then((res) => {
      dispatch({ type: props.setType, payload: res})
    })
  }

  const handleDecrementPage = (e) => {
    if (page > 1) {
      dispatch({ type: props.pageType, payload: page - 1})
      setActive(page - 1)
      props.apiCall(searchQuery, page - 1).then((res) => {
        dispatch({ type: props.setType, payload: res })
      })
    }
  }
  
  const handleIncrementPage = (e) => {
    if (page < props.pages) {
      dispatch({ type: props.pageType, payload: page + 1})
      setActive(page + 1)
      props.apiCall(searchQuery, page + 1).then((res) => {
        dispatch({ type: props.setType, payload: res })
      })
    }
  }

  useEffect(() => {
    let pagArray = [<Pagination.Prev key={0} onClick={(e) => handleDecrementPage()} />]
    for (let number = 1; number <= props.pages; number++) {
      pagArray.push(
        <Pagination.Item key={number} active={number === active} onClick={(e) => {
          dispatch({ type: props.pageType, payload: number })
          handleChangePage(e, number)
          setActive(number)
        }} >
          {number}
        </Pagination.Item>
      )
    }
    pagArray.push(<Pagination.Next key={props.pages + 1} onClick={(e) => handleIncrementPage()} />)
    setItems(pagArray)
  }, [props, active, dispatch, page])

  return (
    <span className="pagination-parent">
      <Pagination size="sm">
        {items}
      </Pagination>
    </span>

  )
}

export default PaginationComponent
