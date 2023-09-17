import React from 'react'
<<<<<<< HEAD
import PropType from 'prop-types'
=======
import PropTypes from 'prop-types'
>>>>>>> main
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
<<<<<<< HEAD
  children: PropType.node
=======
  children: PropTypes.node.isRequired
>>>>>>> main
}
