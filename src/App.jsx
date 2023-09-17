import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './styles.css'
export default function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
