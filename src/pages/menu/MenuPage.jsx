import React from 'react'
import Header from '../../components/header'
import MenuDishes from '../../components/menu-dishes/MenuDishes'
import styles from './menu-page.module.css'
export default function MenuPage () {
  return (
    <>
      <Header />
      <section className={styles.Menu}>
        <article className={styles['Menu-article']}>
          <h2 className={styles['Menu-title']}>Menu</h2>
          <p className={styles['Menu-text']}>este es el menu</p>
        </article>
        <MenuDishes style={{ maxHeight: '100%' }} />
      </section>
    </>
  )
}
