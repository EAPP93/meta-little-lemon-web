import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext('null')

export function UserContext ({ children }) {
  const [log, setLog] = useState(false)
  const logging = () => {
    setLog(!log)
  }
  return (
    <Context.Provider value={{ log, logging }}>
      {children}
    </Context.Provider>
  )
}

UserContext.propTypes = {
  children: PropTypes.node
}

export const useUserContext = () => {
  return useContext(Context)
}
