import React from 'react'
import styles from './notification.module.css'
import PropTypes from 'prop-types'

export default function Notification ({ show }) {
  return (
    <section className={styles.Notification} >
      <h2 className={styles['Notification-topic']}> </h2>
      <p className={styles['Notification-text']}>this is a notification</p>
      <button className={styles['Notification-btn']} onClick={show}>ok</button>
    </section>
  )
}

Notification.propTypes = {
  show: PropTypes.func.isRequired
}

// 5354632468145453
