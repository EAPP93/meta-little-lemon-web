import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

// creamos contexto
const DateContext = createContext(null)

// definimos estado inicial
const initialState = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00']
}

// definimos las acciones para el dispatch
const actions = {
  initializeTimes: 'INITIALIZE',
  updateTimes: 'UPDATE'
}

// reducer para manejar las acciones
const updateReducer = (state, action) => {
  switch (action.type) {
    case actions.initializeTimes:
      return state
    case actions.updateTimes:
      return {
        ...state,
        availableTimes: [...state.availableTimes, action.payload]
      }
    default:
      return state
  }
}
export function DateProvider ({ children }) {
  const [state, dispatch] = useReducer(updateReducer, initialState)

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
