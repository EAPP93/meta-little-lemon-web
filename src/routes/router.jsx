import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/'
import NotFound from '../pages/not-found'
import BookingPage from '../pages/booking/BookingPage '
import AboutPage from '../pages/about'
import MenuPage from '../pages/menu/MenuPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound/>
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/reservations',
    element: <BookingPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/menu',
    element: <MenuPage/>
  },
  {
    path: '/cart'
  }
])
