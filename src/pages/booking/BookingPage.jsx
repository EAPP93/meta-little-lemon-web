import React, { useEffect } from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import Picture from '../../components/picture'
import BookingForm from './components/booking-form/BookingForm'
import styles from './booking-page.module.css'
import { useDateContext } from '../../context/DateProvider'
import { submitAPI } from '../../api'
import { useNavigate } from 'react-router-dom'

export default function BookingPage () {
  const restaurant = () => require('../../assets/img/restaurant.jpg')
  const cook = () => require('../../assets/img/cooker-min.png')

  const { state, dispatch } = useDateContext()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: new Date().toLocaleDateString })
  }, [])

  const submitForm = (data) => {
    if (submitAPI(data)) {
      dispatch({ type: 'SET_DATA', payload: data })
      return navigate('/booking/confirmed')
    }
  }

  return (
    <>
      <Header />
      <Main style={styles.BookingPage}>
        <h1 role="heading" aria-level="1" className={styles['BookingPage-title']}>Little Lemon</h1>
        <h2 role="heading" aria-level="2" className={styles['BookingPage-subtitle']}>Chicago</h2>
        <section className={styles['BookingPage-images']}>
          <Picture defaultImage={ { src: restaurant(), alt: 'image of restaurant' }} list={[]} picture={styles['BookingPage-picture']} />
          <Picture defaultImage={ { src: cook(), alt: 'image of restaurant' }} list={[]} picture={styles['BookingPage-picture']} />
        </section>
        <p className={styles['BookingPage-text']}>Find a table fon any occasion</p>
        <BookingForm dispatch={dispatch} availableTimes={ state.availableTimes } submitForm={submitForm} />
      </Main>
      <Footer />
    </>
  )
}
