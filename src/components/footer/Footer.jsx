import React from 'react'
import { Link } from 'react-router-dom'

import styles from './footer.module.css'
import Picture from '../picture'
export default function Footer () {
  const img = () => require('../../assets/img/restauran-food-min.png')

  const ListMenu = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login'
  ]

  const DataContact = {
    phone: '+34 666 666 666',
    mail: 'admin@little-lemon.com',
    address: 'Calle A, 123'
  }

  const SocialMedia = [
    {
      type: 'facebook',
      link: 'https://www.facebook.com'
    },
    {
      type: 'instagram',
      link: 'https://www.instagram.com'
    },
    {
      type: 'twitter',
      link: 'https://www.twitter.com'
    }
  ]
  return (
    <footer className={styles.Footer}>
      <Picture defaultImage={{ src: img(), alt: 'Image of food of the restaurant Little Lemon' }} list={[]} picture={styles['Footer-picture']} img={styles['Footer-img']} />
      <ul className={styles['Footer-menu']}>
        {ListMenu.map((el, index) => {
          return (
            <li key={index}>
              <Link to={`/${el.toLowerCase()}`} role='button' className={styles['Footer-link']}>
                {el}
              </Link>
            </li>
          )
        })}
      </ul>
      <section className={styles['Footer-contact']}>
        <h3>Contact</h3>
        <p>{DataContact.phone}</p>
        <p>{DataContact.mail}</p>
        <p>{DataContact.address}</p>
      </section>
      <ul className={styles['Footer-socials']}>
        {
          SocialMedia.map((el, index) => {
            return <li key={index}><a href={el.link}>{el.type}</a></li>
          })
        }
      </ul>
    </footer>
  )
}
