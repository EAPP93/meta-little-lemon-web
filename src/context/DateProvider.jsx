import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { fetchAPI } from '../api/index'

// creamos contexto
export const DateContext = createContext(null)

// definimos estado inicial
export const initialState = {
  availableTimes: [],
  book: {}
}

// definimos las acciones para el dispatch
export const actions = {
  INITIALIZE_TIMES: 'INITIALIZE_TIMES',
  UPDATE_TIMES: 'UPDATE_TIMES',
  SET_DATA: 'SET_DATA'
}

// reducer para manejar las acciones
const Reducer = (state, action) => {
  switch (action.type) {
    case actions.INITIALIZE_TIMES:
      return {
        availableTimes: [' --- ', ...fetchAPI(action.payload)]
      }
    case actions.UPDATE_TIMES:
      return {
        availableTimes: [' --- ', ...fetchAPI(action.payload)]
      }
    case actions.SET_DATA:
      return {
        book: JSON.parse(action.payload)
      }
    default:
      return state
  }
}
export function DateProvider ({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <DateContext.Provider value={{ state, dispatch }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDateContext = () => useContext(DateContext)

DateProvider.propTypes = {
  children: PropTypes.node.isRequired
}
