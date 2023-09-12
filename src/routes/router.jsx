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
    path: '/Home',
    element: <HomePage />
  },
  {
    path: '/Reservations',
    element: <BookingPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/About',
    element: <AboutPage/>
  },
  {
    path: '/Menu',
    element: <MenuPage/>
  },
  {
    path: '/cart'
  }
])
