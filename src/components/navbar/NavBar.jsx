import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import HamburgerMenu from '../hamburger-menu'
import Picture from '../picture/Picture'

export default function NavBar () {
  const [active, setActive] = useState(false)
  const isActive = () => {
    setActive(active => !active)
  }

  const [size, setSize] = useState(window.innerWidth)

  const handleResize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [size])

  const list = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login'
  ]

  const LOGO = () => require('../../assets/img/Logo.svg')
  const Carrito = () => require('../../assets/img/Basket.svg')

  return (
    <nav className={styles.NavBar}>

      {/* Hamburger Menu */}
      {size < 577 && <HamburgerMenu active={active} isActive={isActive}/>}

      {/* Logo Little Lemon */}
      <Picture defaultImage={{ src: LOGO(), alt: 'Logo Little Lemon' }} list={[]} style={{ width: 'calc(8rem + 1.25vw)', height: 'calc(2.5rem + 1vw)' } } styleImg={{ objectFit: 'contain' }}/>

      {/* Menu */}
      <ul className={ active ? `${styles['NavBar-ul']} ${styles['is-active']}` : `${styles['NavBar-ul']}`}>
        {list.map((el, ifIndex) => {
          return (
            <li key={ifIndex} className={styles['NavBar-li']}>
              <Link to={`/${el}`} className={styles['NavBar-link']} role='button'>
                {el}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* imagen carrito de compras */}
      {size < 577 && <Picture defaultImage={{ src: Carrito(), alt: 'Carrito de compras' }} list={[]} style={{ width: 'calc(2.6rem + 1vw)', height: 'calc(2.5rem + 1vw)' }} />}

    </nav>
  )
}
