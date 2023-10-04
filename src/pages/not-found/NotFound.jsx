import React from 'react'
import Picture from '../../components/picture'
import styles from './not-found.module.css'

export default function NotFound () {
  const img = () => require('../../assets/img/Logo.svg')
  return (
    <main className={styles.NotFound}>
      <div className={styles['NotFound-container']}>
        <Picture defaultImage={{ src: img(), alt: 'image of little lemon' }} list={[]}></Picture>
      </div>
      <div className={styles['NotFound-container']}>
        <h1 className={styles['NotFound-title']}>Error 404</h1>
      </div>
    </main>
  )
}
