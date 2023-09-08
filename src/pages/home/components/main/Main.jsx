import React from 'react'
import Picture from '../../../../components/picture/Picture'
import { Link } from 'react-router-dom'
import styles from './main.module.css'
import MenuCategories from '../menu-categories/MenuCategories'
import MenuDishes from '../menu-dishes'

export default function Main () {
  const AboutImage = () => require('../../../../assets/img/restauranfood.jpg')

  return (
    <main className={styles.Main}>
      <article className={styles.Article}>
        <header className={styles['Article-header']}>
          <h1 className={styles['Article-title']}>Little Lemon</h1>
          <h4 className={styles['Article-subtitle']}>Madrid</h4>
        </header>
        <main className={styles['Article-main']}>
          <p className={styles['Article-text']}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Picture role='img' defaultImage={{ src: AboutImage(), alt: 'Image of food of the restaurant Little Lemon' }} list={[]} style={{ width: '40%', height: '40vw' }} styleImg={{ objectFit: 'cover', borderRadius: '0.5rem' }}/>
        </main>
        <footer className={styles['Article-footer']}>
          <Link className={styles['Article-link']} role='button' to='/about'>Reserve a table</Link>
        </footer>
      </article>
      <MenuCategories />
      <MenuDishes />
    </main>
  )
}
