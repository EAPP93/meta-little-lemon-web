import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import HamburgerMenu from '../hamburger-menu'
import Nav from '../nav'
import Picture from '../picture'
import { useSizeContext } from '../../context/SizeContext'

export default function Header () {
  const size = useSizeContext()

  const [active, setActive] = useState(false)

  const isActive = () => {
    setActive(active => !active)
  }

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [active])

  const LOGO = () => require('../../assets/img/Logo.svg')
  const Carrito = () => require('../../assets/img/Basket.svg')

  return (
    <header className={styles.Header} >
       {/* Hamburger Menu */}
      {size < 577 && <HamburgerMenu active={active} isActive={isActive}/>}

      {/* Logo Little Lemon */}
      <Picture defaultImage={{ src: LOGO(), alt: 'Logo Little Lemon' }} list={[]} picture={styles['Header-logo']} img={styles['Header-img']} />

      {/* Menu links */}
      <Nav nav={!active ? styles['Header-nav'] : `${styles['Header-nav']} ${styles['is-active']}`} link={styles['Header-link']} />

      {/* imagen carrito de compras */}
      {size < 577 && <Picture defaultImage={{ src: Carrito(), alt: 'Carrito de compras' }} list={[]} img={styles['Header-cartImg']} />}
    </header>
  )
}
