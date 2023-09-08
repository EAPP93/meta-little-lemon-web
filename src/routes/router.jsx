import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/'
import NotFound from '../pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => Promise.resolve('hola'),
    errorElement: <NotFound/>
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Home />,
    loader: () => Promise.resolve('hola'),
    errorElement: <NotFound/>
  },
  {
    path: '/singup'
  },
  {
    path: '/payment'
  },
  {
    path: '/reservation'
  },
  {
    path: '/cart'
  }
])
