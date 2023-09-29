import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import CallToAction from '../../components/call-to-action'
import Chicago from '../../components/chicago'

export default function AboutPage () {
  return (
    <>
      <Header />
      <Main>
        <CallToAction/>
        <Chicago />
        </Main>
      <Footer />
    </>
  )
}
