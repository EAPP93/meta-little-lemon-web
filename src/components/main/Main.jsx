import React from 'react'
import PropTypes from 'prop-types'
import styles from './main.module.css'

export default function Main ({ children }) {
  return (
    <main className={styles.Main}>
      {
        children
      }
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
