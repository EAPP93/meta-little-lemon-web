import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Main from '../../components/main'
import styles from './shopping-page.module.css'

export default function ShoppingPage () {
  return (
    <>
      <Header />
      <Main>
        <section className={styles['ShoppingPage-section']}>
         <h1 className={styles['ShoppingPage-title']}> in progress</h1>
        </section>

        <section className={styles['ShoppingPage-section']}>
          <h2 className={styles['ShoppingPage-subtitle']}>Sorry</h2>
        </section>
      </Main>
      <Footer/>
    </>
  )
}
