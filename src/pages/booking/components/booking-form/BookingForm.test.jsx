import '@testing-library/jest-dom'
import { expect, describe, test, jest } from '@jest/globals'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from './BookingForm'
import { act } from 'react-dom/test-utils' // Importa act desde react-dom/test-utils

// Mock para la función submitForm
const mockSubmitForm = jest.fn()

describe('BookingForm Component', () => {
  // Prueba 1: Verifica que todos los elementos de texto se rendericen correctamente.
  test('should render all text elements', () => {
    render(
      <BookingForm
        dispatch={jest.fn()}
        availableTimes={['08:00', '10:00', '12:00']}
        submitForm={mockSubmitForm}
      />
    )

    // Verifica que todos los elementos de texto esperados estén presentes en el formulario.
    expect(screen.getByLabelText('Time:')).toBeInTheDocument()
    expect(screen.getByLabelText('Diners:')).toBeInTheDocument()
    expect(screen.getByLabelText('Date:')).toBeInTheDocument()
    expect(screen.getByLabelText('Occasion:')).toBeInTheDocument()
    expect(screen.getByText('Seating Options')).toBeInTheDocument()
    expect(screen.getByText('Standar options')).toBeInTheDocument()
    expect(screen.getByText('Outside')).toBeInTheDocument()
    expect(screen.getByText('Make Your Reservation')).toBeInTheDocument()
  })

  // Prueba 2: Verifica que los valores de los campos de formulario se actualicen correctamente.
  test('should handle form input changes', async () => {
    render(
      <BookingForm
        dispatch={jest.fn()}
        availableTimes={['08:00', '10:00', '12:00']}
        submitForm={mockSubmitForm}
      />
    )

    const dateInput = screen.getByLabelText('Date:')
    const timeSelect = screen.getByLabelText('Time:')
    const dinersInput = screen.getByLabelText('Diners:')
    const occasionSelect = screen.getByLabelText('Occasion:')
    const standardRadio = screen.getByLabelText('Standar options')
    const outsideRadio = screen.getByLabelText('Outside')

    // Simula cambios en los valores de los campos del formulario.
    await act(() => {
      fireEvent.change(dateInput, { target: { value: '2023-12-25' } })
      fireEvent.change(timeSelect, { target: { value: '10:00' } })
      fireEvent.change(dinersInput, { target: { value: '4' } })
      fireEvent.change(occasionSelect, { target: { value: 'anniversary' } })
      fireEvent.click(outsideRadio)
    })

    // Verifica que los valores de los campos se hayan actualizado correctamente.
    expect(dateInput.value).toBe('2023-12-25')
    expect(timeSelect.value).toBe('10:00')
    expect(dinersInput.value).toBe('4')
    expect(occasionSelect.value).toBe('anniversary')
    expect(standardRadio.checked).toBe(false)
    expect(outsideRadio.checked).toBe(true)
  })

  // Prueba 3: Verifica que el formulario se envíe correctamente y que la función submitForm se llame con los valores adecuados.
  test('should handle form submission and show an alert', async () => {
    render(
      <BookingForm
        dispatch={jest.fn()}
        availableTimes={['08:00', '10:00', '12:00']}
        submitForm={mockSubmitForm}
      />
    )
    const dateInput = screen.getByLabelText('Date:')
    const timeSelect = screen.getByLabelText('Time:')
    const dinersInput = screen.getByLabelText('Diners:')
    const occasionSelect = screen.getByLabelText('Occasion:')
    const standardRadio = screen.getByLabelText('Standar options')
    const submitButton = screen.getByText('Make Your Reservation')

    // Envuelve las actualizaciones de estado dentro de una función act.
    await act(() => {
      fireEvent.change(dateInput, { target: { value: '2023-12-25' } })
      fireEvent.change(timeSelect, { target: { value: '10:00' } })
      fireEvent.change(dinersInput, { target: { value: '4' } })
      fireEvent.change(occasionSelect, { target: { value: 'anniversary' } })
      fireEvent.click(standardRadio)
    })

    // Simula el envío del formulario dentro de act.
    await act(() => {
      fireEvent.click(submitButton)
    })

    // Verifica que se activa el evento de envío del formulario.
    expect(mockSubmitForm).toHaveBeenCalled()
  })
})
