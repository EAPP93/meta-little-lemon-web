import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { SizeProvider } from './context/SizeProvider'
export default function App () {
  return (
    <SizeProvider>
      <RouterProvider router={router} />
    </SizeProvider>
  )
}
