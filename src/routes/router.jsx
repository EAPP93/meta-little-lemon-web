import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/'
import NotFound from '../pages/not-found'
import BookingPage from '../pages/booking/BookingPage '
import AboutPage from '../pages/about'
import MenuPage from '../pages/menu/MenuPage'
import ShoppingPage from '../pages/shop/ShoppingPage'
import Login from '../pages/login/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound/>
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/menu',
    element: <MenuPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/booking',
    element: <BookingPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/cart',
    element: <ShoppingPage />,
    errorElement: <NotFound/>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound/>
  }
])
