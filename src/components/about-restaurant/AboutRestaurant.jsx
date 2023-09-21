import React from 'react'
import styles from './about-restaurant.module.css'
import Picture from '../picture'
export default function AboutRestaurant () {
  const img1 = () => require('../../assets/img/cooker-min.png')
  const img2 = () => require('../../assets/img/restauran-food-2-min.png')
  return (
    <section className={styles.AboutRestaurant}>
      <div className={styles['AboutRestaurant-about']} >
        <h2 className={styles['AboutRestaurant-title']}> Little Lemon </h2>
        <h3 className={styles['AboutRestaurant-subtitle']}> Madrid </h3>
        <p className={styles['AboutRestaurant-text']}>
          At Little Lemon, we take pride in being a family-owned Mediterranean restaurant.
          Our commitment to preserving traditional recipes while infusing them
          with a contemporary flair sets us apart. What makes Little Lemon
          truly exceptional is our dedication to using the freshest local ingredients
          to craft each dish. Come savor the essence of the Mediterranean with a modern
          twist at Little Lemon – where tradition meets innovation.
        </p>
      </div>
      <div className={styles['AboutRestaurant-images']} >
        <Picture defaultImage={{ src: img2() }} list={['']} picture={styles['AboutRestaurant-picture']} img={styles['AboutRestaurant-img']}/>
        <Picture defaultImage={{ src: img1() }} list={['']} picture={styles['AboutRestaurant-picture']} img={styles['AboutRestaurant-img']}/>
      </div>

        </section>
  )
}
