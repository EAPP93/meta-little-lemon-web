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
  INITIALIZE_TIMES: 'INITIALIZE_TIMES',
  UPDATE_TIMES: 'UPDATE_TIMES'
}

// reducer para manejar las acciones
const Reducer = (state, action) => {
  switch (action.type) {
    case actions.INITIALIZE_TIMES:
      return {
        availableTimes: action.payload
      }
    case actions.UPDATE_TIMES:
      return {
        ...state,
        availableTimes: [...state.availableTimes, action.payload]
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
