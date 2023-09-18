import React from 'react'
import Picture from '../picture/Picture'
import PropTypes from 'prop-types'
import styles from './dish.module.css'

export default function Dish({ img, name, about, price, size }) {
  const icon = () => require('../../assets/img/icon.svg')
  return (
    <article className={styles.Dish}>
      <Picture picture={styles['Dish-picture']} img={styles['Dish-img']} role='img' defaultImage={{ src: img(), alt: `image of dish ${name}` }} list={[]} />
      <section className={styles['text-section']} >
        <h3 className={styles['Dish-title']}>{name}</h3>
        <p className={styles['Dish-about']}>{about}</p>
        <p className={styles['Dish-price']}>${price}</p>
        {
          size > 576 && <button className={styles['Dish-button']}>
            Order a delivery
            <Picture img={styles['Dish-icon']} defaultImage={{ src: icon(), alt: `icon delivery` }} list={[]}/>
          </button>
        }

      </section>
    </article>
  )
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
  img: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}
