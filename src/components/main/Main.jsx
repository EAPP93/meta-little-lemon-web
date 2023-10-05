import React from 'react'
import PropType from 'prop-types'
import styles from './main.module.css'

export default function Main ({ children, style }) {
  return (
    <main className={`${styles.Main} ${style}`}>
      {
        children
      }
    </main>
  )
}

Main.propTypes = {
  children: PropType.node,
  style: PropType.string
}
