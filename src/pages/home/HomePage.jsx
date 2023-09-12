import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'

import MenuCategories from './components/menu-categories'
import About from '../../components/about'
import MenuDishes from '../../components/menu-dishes/MenuDishes'

export default function HomePage () {
  return (
    <>
      <Header />
      <Main>
        <About />
        <MenuCategories />
        <MenuDishes />
      </Main>
    </>
  )
}
