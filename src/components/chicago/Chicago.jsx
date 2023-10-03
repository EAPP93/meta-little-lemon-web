import React from 'react'
import styles from './chicago.module.css'
import Picture from '../picture'
export default function Chicago () {
  const img1 = () => require('../../assets/img/cooker-min.png')
  const img2 = () => require('../../assets/img/restauran-food-2-min.png')
  return (
    <section className={styles.Chicago}>
      <div className={styles['Chicago-about']} >
        <h2 className={styles['Chicago-title']}> Little Lemon </h2>
        <h3 className={styles['Chicago-subtitle']}> Chicago </h3>
        <p className={styles['Chicago-text']}>
          At Little Lemon, we take pride in being a family-owned Mediterranean restaurant.
          Our commitment to preserving traditional recipes while infusing them
          with a contemporary flair sets us apart. What makes Little Lemon
          truly exceptional is our dedication to using the freshest local ingredients
          to craft each dish. Come savor the essence of the Mediterranean with a modern
          twist at Little Lemon – where tradition meets innovation.
        </p>
      </div>
      <div className={styles['Chicago-images']} >
        <Picture defaultImage={{ src: img2(), alt: 'image of cook' }} list={[]} picture={styles['Chicago-picture']} img={styles['Chicago-img']}/>
        <Picture defaultImage={{ src: img1(), alt: 'image of restaurant' }} list={[]} picture={styles['Chicago-picture']} img={styles['Chicago-img']}/>
      </div>
    </section>
  )
}
