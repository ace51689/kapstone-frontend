import create from 'zustand'
import { devtools, redux } from "zustand/middleware"

const initialState = { medium: "movie", sortBy: "popular", page: 1, search: [], searchPage: 1 }

export const SET_MEDIUM = "SETMEDIUM"
export const SET_SORT_BY = "SETSORTBY"
export const SET_PAGE = "SETPAGE"
export const SET_SEARCH = "SETSEARCH"
export const SET_SEARCH_PAGE = "SETSEARCHPAGE"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_MEDIUM:
      return { medium: action.payload }
    case SET_SORT_BY:
      return { sortBy: action.payload }
    case SET_PAGE:
      return { page: action.payload }
    case SET_SEARCH:
      return { search: action.payload }
    case SET_SEARCH_PAGE:
      return { searchPage: action.payload }
    default:
      return state
  }
}

export const useStore = create(devtools(redux(reducer, initialState)))