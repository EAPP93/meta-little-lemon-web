import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { SizeProvider } from './context/SizeProvider'
import { DateProvider } from './context/DateProvider'
export default function App () {
  return (
    <DateProvider>
      <SizeProvider>
        <RouterProvider router={router} />
      </SizeProvider>
    </DateProvider>
  )
}
