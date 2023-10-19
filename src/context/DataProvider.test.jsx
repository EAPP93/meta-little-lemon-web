import { test, expect } from '@jest/globals'
import React, { useContext, useReducer } from 'react'
import { renderHook } from '@testing-library/react'
import { DateContext, Reducer, initialState } from './DateProvider' // Asegúrate de importar el reducer y el estado inicial desde tu archivo
import { fetchAPI } from '../api'

// Creamos un contexto de prueba
const createTestContext = () => {
  const wrapper = ({ children }) => (
    <DateContext.Provider value={useReducer(Reducer, initialState)}>
      {children}
    </DateContext.Provider>
  )

  const { result } = renderHook(() => useContext(DateContext), { wrapper })

  return result
}

// Prueba del reducer
test('Reducer debe manejar INITIALIZE_TIMES correctamente', () => {
  const { result } = createTestContext()
  const [, dispatch] = result.current

  const action = { type: 'INITIALIZE_TIMES', payload: 'data' }

  dispatch(action)

  expect(result.current[0]).toEqual({
    availableTimes: fetchAPI(action.payload),
    data: {}
  })
})

test('Reducer debe manejar UPDATE_TIMES correctamente', () => {
  const { result } = createTestContext()
  const [, dispatch] = result.current

  const action = { type: 'UPDATE_TIMES', payload: 'newData' }

  dispatch(action)

  expect(result.current[0]).toEqual({
    availableTimes: fetchAPI(action.payload),
    data: {}
  })
})
