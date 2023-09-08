import React from 'react'
import Picture from '../picture/Picture'
import PropTypes from 'prop-types'
import styles from './dish.module.css'

export default function Dish ({ img, name, about, price }) {
  return (
    <article className={styles.Dish}>
      <Picture role='img' defaultImage={{ src: img(), alt: `image of dish ${name}` }} list={[]} styleImg={{ objectFit: 'cover', borderRadius: '0.5rem' }}/>
      <section className={styles['Dish-section']}>
          <h3 className={styles['Dish-title']}>{name}</h3>
          <p className={styles['Dish-text']}>{about}</p>
        <p className={styles['Dish-price']}>${price}</p>
      </section>
    </article>
  )
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
  img: PropTypes.func.isRequired
}
