import React from 'react'
import { describe, expect, it, jest } from '@jest/globals'
import { renderHook, act } from '@testing-library/react'
import { useDateContext, DateProvider } from './DateProvider.jsx'
import { fetchAPI } from '../api/index.js'

// Mock de una función fetchAPI
const mockFetchAPI = jest.fn()

jest.mock('../api/index', () => ({
  fetchAPI: mockFetchAPI
}))

describe('DateContext', () => {
  it('debería inicializar y actualizar availableTimes con un array no vacío', async () => {
    // Configura el valor de retorno de fetchAPI para que devuelva un array no vacío
    mockFetchAPI.mockImplementation((payload) => {
      if (payload === '2023-11-24') {
        return ['hora1', 'hora2', 'hora3']
      }
      // Devuelve un valor predeterminado para otras llamadas a fetchAPI
      return []
    })

    const wrapper = ({ children }) => (
      <DateProvider>{children}</DateProvider>
    )

    const { result } = renderHook(() => useDateContext(), { wrapper })

    // Envuelve la actualización en act
    await act(() => {
      // Inicializa availableTimes con un array no vacío para la fecha específica
      result.current.dispatch({ type: 'INITIALIZE_TIMES', payload: '2023-11-24' })
    })

    // Verifica que availableTimes no esté vacío
    expect(result.current.state.availableTimes).not.toEqual([])
  })

  it('debería establecer book como un objeto vacío', async () => {
    const wrapper = ({ children }) => (
      <DateProvider>{children}</DateProvider>
    )

    const { result } = renderHook(() => useDateContext(), { wrapper })

    // Configura el valor de retorno de fetchAPI para que devuelva un array no vacío
    mockFetchAPI.mockImplementation(() => {
      return ['hora1', 'hora2', 'hora3']
    })

    // Envuelve la actualización en act
    await act(() => {
      // Establece book como un objeto vacío para la fecha específica
      result.current.dispatch({
        type: 'SET_DATA',
        payload: '{"date": "2023-11-24", "time": "15:30", "diners": 5, "occasion": "celebration", "seating": "outdoor"}'
      })
    })

    // Verifica que book sea un objeto, pero no necesariamente con valores específicos
    expect(result.current.state.book).toEqual(expect.any(Object))
  })
})
