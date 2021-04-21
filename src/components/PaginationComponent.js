import React, { useState, useEffect } from 'react'
import { useStore, SET_ACTIVE_PAGE } from "../store/store"
import { Pagination } from "react-bootstrap"
import "./PaginationComponent.css"

const PaginationComponent = (props) => {
  const [items, setItems] = useState([])
  const activePage = useStore((state) => state.activePage)
  const dispatch = useStore((state) => state.dispatch)
  const page = useStore((state) => state.searchPage)
  const searchQuery = useStore((state) => state.searchQuery)

  
  useEffect(() => {
    const handleChangePage = (e, number) => {
      props.apiCall(searchQuery, number).then((res) => {
        dispatch({ type: props.setType, payload: res})
      })
    }
  
    const handleDecrementPage = (e) => {
      if (page > 1) {
        dispatch({ type: props.pageType, payload: page - 1})
        dispatch ({ type: SET_ACTIVE_PAGE, payload: activePage - 1})
        props.apiCall(searchQuery, page - 1).then((res) => {
          dispatch({ type: props.setType, payload: res })
        })
      }
    }
    
    const handleIncrementPage = (e) => {
      if (page < props.pages) {
        dispatch({ type: props.pageType, payload: page + 1})
        dispatch({ type: SET_ACTIVE_PAGE, payload: activePage + 1 })
        props.apiCall(searchQuery, page + 1).then((res) => {
          dispatch({ type: props.setType, payload: res })
        })
      }
    }
    
    let pagArray = [<Pagination.Prev key={0} onClick={(e) => handleDecrementPage()} />]
    for (let number = 1; number <= props.pages; number++) {
      pagArray.push(
        <Pagination.Item key={number} active={number === activePage} onClick={(e) => {
          dispatch({ type: props.pageType, payload: number })
          handleChangePage(e, number)
          dispatch({type: SET_ACTIVE_PAGE, payload: number})
        }} >
          {number}
        </Pagination.Item>
      )
    }
    
    
    pagArray.push(<Pagination.Next key={props.pages + 1} onClick={(e) => handleIncrementPage()} />)
    setItems(pagArray)

  }, [props, activePage, dispatch, page, searchQuery])

  return (
    <span className="pagination-parent">
      <Pagination size="sm">
        {items}
      </Pagination>
    </span>

  )
}

export default PaginationComponent
