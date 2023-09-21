import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import About from '../../components/about'
import AboutRestaurant from '../../components/about-restaurant'

export default function AboutPage () {
  return (
    <>
      <Header />
      <Main>
        <About />
        <AboutRestaurant />

        </Main>
      <Footer />
    </>
  )
}
