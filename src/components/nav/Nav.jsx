import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Nav ({ nav, link }) {
  const MenuList = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Menu',
      path: '/menu'
    },
    {
      name: 'Reservations',
      path: '/booking'
    },
    {
      name: 'Order Online',
      path: '/cart'
    },
    {
      name: 'Login',
      path: '/login'
    }
  ]
  return (
    <nav className={nav} role='navigation'>
      {MenuList.map((el, index) => {
        return (
          <NavLink key={index} to={el.path} className={link} role='button' style={({ isActive }) => { return isActive ? { color: 'var(--color-secondary-1)' } : {} }}>
            {el.name}
          </NavLink>
        )
      })}
    </nav>
  )
}

Nav.propTypes = {
  nav: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
