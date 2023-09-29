import React, { useState, useEffect } from 'react'

import Header from '../../components/header'
import Main from '../../components/main'
import MenuCategories from './components/menu-categories'
import CallToAction from '../../components/call-to-action'
import MenuDishes from '../../components/menu-dishes/MenuDishes'
import Specials from './components/specials'
import CustomersSay from './components/customers-say/CustomersSay'
import Chicago from '../../components/chicago'
import Footer from '../../components/footer/Footer'

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
      <Header size={size} />
      <Main >
        <CallToAction />
        {
          size < 577
            ? <>
                <MenuCategories />
                <MenuDishes size={size} />
              </>
            : <>
              <Specials size={size} />
              <CustomersSay />
              <Chicago />
            </>
        }
      </Main>
      <Footer size={size} />
    </>
  )
}
