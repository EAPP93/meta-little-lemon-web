import React from 'react'
import PropType from 'prop-types'
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
  children: PropType.node
}
