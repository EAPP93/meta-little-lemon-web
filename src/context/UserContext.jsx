import React, { createContext } from 'react'
import PropTypes from 'prop-types'
const UserContext = createContext(null)
export default function UserProvider ({ children }) {
  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any
}
