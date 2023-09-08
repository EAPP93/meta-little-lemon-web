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

  useEffect(() => {
    // Función para actualizar el tamaño del viewport cuando cambia la ventana
    const handleResize = () => {
      setSize(window.innerWidth)
    }

    // Agrega un event listener para detectar cambios en el tamaño del viewport
    window.addEventListener('resize', handleResize)

    // Limpia el event listener cuando el componente se desmonta
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
      {size < 576 && <HamburgerMenu active={active} isActive={isActive}/>}

      {/* Logo Little Lemon */}
      <Picture defaultImage={{ src: LOGO(), alt: 'Logo Little Lemon' }} list={[]} style={{ width: 'calc(8rem + 1.25vw)', height: 'calc(2.5rem + 1vw)' }}/>

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
      {size < 576 && <Picture defaultImage={{ src: Carrito(), alt: 'Carrito de compras' }} list={[]} style={{ width: 'calc(2.6rem + 1vw)', height: 'calc(2.5rem + 1vw)' }} />}

    </nav>
  )
}
