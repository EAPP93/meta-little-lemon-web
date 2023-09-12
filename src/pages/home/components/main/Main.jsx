import React from 'react'
import styles from './main.module.css'
import MenuCategories from '../menu-categories/MenuCategories'
import About from '../../../../components/about'
import MenuDishes from '../../../../components/menu-dishes/MenuDishes'

export default function Main () {
  return (
    <main className={styles.Main}>
      <About />
      <MenuCategories />
      <MenuDishes />
    </main>
  )
}
