/* eslint-disable space-infix-ops */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './hamburgermenu.module.css'

export default function HamburgerMenu ({ active, isActive }) {
  return (
    <div className={active ? `${styles.HamburgerMenu} ${styles['is-active']}` : `${styles.HamburgerMenu} ${styles['u-color']}`} onClick={isActive}>
      <span className={active ? `${styles['HamburgerMenu-span']} ${styles['is-active']}` : `${styles['HamburgerMenu-span']}`}></span>
      <span className={active ? `${styles['HamburgerMenu-span']} ${styles['is-active']}` : `${styles['HamburgerMenu-span']}`}></span>
      <span className={active ? `${styles['HamburgerMenu-span']} ${styles['is-active']}` : `${styles['HamburgerMenu-span']}`}></span>
    </div>
  )
}

HamburgerMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  isActive: PropTypes.func.isRequired
}
