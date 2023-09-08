import React from 'react'
import styles from './header.module.css'
import NavBar from '../navbar'
export default function Header () {
  return (
    <header className={styles.header}>
      <NavBar/>
    </header>
  )
}
