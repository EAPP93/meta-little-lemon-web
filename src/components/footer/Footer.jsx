import React from 'react'
import styles from './footer.module.css'
import Picture from '../picture'
import Nav from '../nav'
import { useSizeContext } from '../../context/SizeContext'

export default function Footer () {
  const size = useSizeContext()
  const img = () => require('../../assets/img/restauran-food-min.png')

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
      {
        size > 577 && <Nav nav={styles['Footer-menu']} link={styles['Footer-link']}/>
      }
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
