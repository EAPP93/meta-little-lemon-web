import React from 'react'
import Picture from '../../components/picture'
import styles from './not-found.module.css'
import { Link } from 'react-router-dom'

export default function NotFound () {
  const img = () => require('../../assets/img/Logo.svg')
  return (
    <main className={styles.NotFound}>
      <section className={styles['NotFound-section']}>
        <div className={styles['NotFound-container']}>
        <Picture defaultImage={{ src: img(), alt: 'image of little lemon' }} list={[]}></Picture>
      </div>
      <div className={styles['NotFound-container']}>
        <h1 className={styles['NotFound-title']}>Error 404</h1>
      </div>
      </section>

        <Link to='/' className={styles['NotFound-link']}>
          Back to home page
        </Link>
    </main>
  )
}
