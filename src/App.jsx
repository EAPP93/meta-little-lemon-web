import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { UserContext } from './context/UserContext'
export default function App () {
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  )
}
