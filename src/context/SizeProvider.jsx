import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const SizeContext = createContext(null)
export function SizeProvider ({ children }) {
  const [size, setSize] = useState(window.innerWidth)

  const handleResize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [size])

  return (
    <SizeContext.Provider value={size}>
      {children}
    </SizeContext.Provider>
  )
}

export const useSizeContext = () => useContext(SizeContext)

SizeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
