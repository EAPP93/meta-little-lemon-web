import React, { useEffect } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Picture from '../../components/picture'
import BookingForm from './components/booking-form/BookingForm'
import styles from './booking-page.module.css'
import { useDateContext } from '../../context/DateProvider'
import { submitAPI } from '../../api'

export default function BookingPage () {
  const restaurant = () => require('../../assets/img/restaurant.jpg')
  const cook = () => require('../../assets/img/cooker-min.png')

  const { state, dispatch } = useDateContext()

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: new Date().toLocaleDateString })
  }, [])

  const submitForm = (data) => {
    console.log(submitAPI(data))
  }

  return (
    <>
      <Header />
      <main className={styles.BookingPage}>
        <h1 className={styles['BookingPage-title']}>Little Lemon</h1>
        <h2 className={styles['BookingPage-subtitle']}>Chicago</h2>
        <section className={styles['BookingPage-images']}>
          <Picture defaultImage={ { src: restaurant(), alt: 'image of restaurant' }} list={[]} picture={styles['BookingPage-picture']} />
          <Picture defaultImage={ { src: cook(), alt: 'image of restaurant' }} list={[]} picture={styles['BookingPage-picture']} />
        </section>
        <p className={styles['BookingPage-text']}>Find a table fon any occasion</p>
        <BookingForm dispatch={dispatch} availableTimes={ state.availableTimes } submitForm={submitForm} />
      </main>
      <Footer />
    </>
  )
}
