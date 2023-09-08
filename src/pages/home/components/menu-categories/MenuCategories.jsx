import React from 'react'
import styles from './menu-categories.module.css'

export default function MenuCategories () {
  const Categories = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials']
  return (
    <section className={styles.MenuCategories}>
        <h2 className={styles['MenuCategories-title']}>Order FOR DELIVERY!</h2>
        <div className={styles['MenuCategories-Categories']}>
          {
            Categories.map((el, index) => {
              return (
                <button key={index} className={styles['MenuCategories-button']}>{el}</button>
              )
            })
          }
        </div>
      </section>
  )
}
