import React from 'react'
import styles from './call-to-action.module.css'
import Picture from '../picture/Picture'
import { Link } from 'react-router-dom'

export default function CallToAction () {
  const AboutImage = () => require('../../assets/img/restauran-food-min.png')
  return (
    <article className={styles.Article}>
        <header className={styles['Article-header']}>
          <h1 className={styles['Article-title']}>Little Lemon</h1>
          <h2 className={styles['Article-subtitle']}>Chicago</h2>
        </header>
        <main className={styles['Article-main']}>
          <p className={styles['Article-text']}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Picture role='img' defaultImage={{ src: AboutImage(), alt: 'Image of food of the restaurant Little Lemon' }} list={[]} picture={styles['Article-picture']} img={styles['Article-img']}/>
        </main>
        <footer className={styles['Article-footer']}>
          <Link className={styles['Article-link']} role='button' to='/booking'>Reserve a table</Link>
        </footer>
      </article>
  )
}
