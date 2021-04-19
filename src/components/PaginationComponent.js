import React, { useState, useEffect } from 'react'
import { useStore } from "../store/store"
import { Pagination } from "react-bootstrap"

const PaginationComponent = (props) => {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const page = useStore((state) => state.searchPage)
  const dispatch = useStore((state) => state.dispatch)

  const handleChangePage = (e) => {
    
  }
  
  useEffect(() => {
    let pagArray = []
    for (let number = 1; number <= props.pages; number++) {
      pagArray.push(
        <Pagination.Item key={number} active={number === active} onClick={(e) => {
          dispatch({ type: props.pageType, payload: number })
          setActive(number)
        }} >
          {number}
        </Pagination.Item>
      )
    }
    setItems(pagArray)
  }, [props, active, dispatch, page])

  return (
    <>
      <Pagination size="sm">
        {items}
      </Pagination>
    </>

  )
}

export default PaginationComponent
