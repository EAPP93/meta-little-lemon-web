import React from 'react'
import styles from './notification.module.css'
import PropTypes from 'prop-types'

export default function Notification ({ show, data, children }) {
  return (
    <section className={styles.Notification} >
      <header>
        <h2 className={styles['Notification-title']}>{data.title} </h2>
      </header>
      <main>
        <p className={styles['Notification-text']}>{data.text}</p>
        {children}
      </main>
      <button className={styles['Notification-btn']} onClick={show}>{data.btn}</button>
    </section>
  )
}

Notification.propTypes = {
  show: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node
}

// 5354632468145453
