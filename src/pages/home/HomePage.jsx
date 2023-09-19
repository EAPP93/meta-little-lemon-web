import React, { useState, useEffect } from 'react'

import Header from '../../components/header'
import Main from '../../components/main'

import MenuCategories from './components/menu-categories'
import About from '../../components/about'
import MenuDishes from '../../components/menu-dishes/MenuDishes'
import Specials from './components/specials'

export default function HomePage () {
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

  return (
    <>
      <Header />
      <Main >
        <About />
        {size < 577 && <MenuCategories />}
        {size < 577 && <MenuDishes />}
        {size > 576 && <Specials size={size}/>}
        {size > 576 && <footer> hola</footer>}
      </Main>
    </>
  )
}
