import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './confirmed-booking.module.css'
import Header from '../../../../components/header'
import Footer from '../../../../components/footer'
import Main from '../../../../components/main'
import Picture from '../../../../components/picture'

export default function ConfirmedBooking () {
  const ccvImage = () => require('../../../../assets/img/credit_score.svg')
  // const selectedItem = () => { }
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      name: '',
      expDate: '',
      CVV: '',
      sendConfirmation: 'text'
    },
    validationSchema: Yup.object().shape({
      cardNumber: Yup.string()
        .matches(/^[0-9]{16}$/, 'El número de tarjeta debe tener 16 dígitos')
        .required('El número de tarjeta es obligatorio'),
      name: Yup.string()
        .matches(/^[\w\s]+$/, 'Ingrese un nombre válido')
        .required('El nombre es obligatorio'),
      expDate: Yup.string()
        .required('La fecha de vencimiento es obligatoria')
        .matches(/^(?:20\d{2}-(?:0[1-9]|1[0-2]))$/, 'El formato de fecha no es válido (YYYY-MM)')
        .test('is-future-date', 'La fecha de vencimiento debe ser posterior a la fecha actual', (value) => {
          if (!value) {
            return false // Si el campo está vacío, se considera una fecha inválida
          }
          // Obtiene la fecha actual en formato "YYYY-MM"
          const currentDate = new Date()
          const currentYear = currentDate.getFullYear()
          const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0')
          const currentYearMonth = `${currentYear}-${currentMonth}`
          // Compara la fecha de vencimiento con la fecha actual
          return value > currentYearMonth
        }),
      CVV: Yup.string()
        .matches(/^[0-9]{3,4}$/, 'El CVV debe tener 3 o 4 dígitos')
        .required('El CVV es obligatorio'),
      sendConfirmation: Yup.string()
        .oneOf(['text', 'email'], 'Valor no válido para la confirmación')
        .required('La confirmación es obligatoria')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <>
      <Header />
      <Main style={styles.ConfirmedBooking}>
        <h1 className={styles['ConfirmedBooking-title']}>Little Lemon</h1>
        <h2 className={styles['ConfirmedBooking-subtitle']}>Chicago</h2>
        <p className={`${styles['ConfirmedBooking-text']} ${styles['u-padding-left']}`}>Booking details</p>
        <section className={styles['ConfirmedBooking-details']}></section>
        <form className={`${styles['ConfirmedBooking-cardBookingForm']} ${styles['u-padding-left']}`} onSubmit={formik.handleSubmit}>
          <p className={styles['ConfirmedBooking-text']}>Booking Cards details</p>
          <fieldset className={styles['ConfirmedBooking-container']}>
            <label
              htmlFor="cardNumber"
            >Card Number: </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formik.values.cardNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.errors.cardNumber
                ? <span className={styles['ConfirmedBooking-error']}>{formik.errors.cardNumber}</span>
                : ''
            }
          </fieldset>

          <fieldset className={styles['ConfirmedBooking-container']}>
            <label
              htmlFor="name"
            >Name: </label>
            <input
              type="text"
              id='name'
              name='name'
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.errors.name
                ? <span className={styles['ConfirmedBooking-error']}>{formik.errors.name}</span>
                : ''
            }
          </fieldset>

          <fieldset className={styles['ConfirmedBooking-container']}>
            <label
              htmlFor="expDate"
            >
              Exp Date
            </label>
            <input
              type="month"
              name="expDate"
              id="expDate"
              value={formik.values.expDate}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {
              formik.errors.expDate
                ? <span className={styles['ConfirmedBooking-error']}>{formik.errors.expDate}</span>
                : ''
            }
          </fieldset>

          <fieldset className={styles['ConfirmedBooking-container']}>
            <label
              htmlFor="CVV"
            >CVV</label>
            <input
              type="number"
              id='CVV'
              name='CVV'
              value={formik.values.CVV}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={styles['ConfirmedBooking-input']}
            />
            {
              formik.errors.CVV
                ? <span className={styles['ConfirmedBooking-error']}>{formik.errors.CVV}</span>
                : ''
            }
            <Picture defaultImage={{ src: ccvImage(), alt: '' }} list={[]} picture={styles['ConfirmedBooking-picture']} img={styles['ConfirmedBooking-img']} />
          </fieldset>

          <fieldset className={styles['ConfirmedBooking-container']}>
            <label >
            Send me booking confirmation via text
            <input
              type="radio"
              id="sendConfirmation"
              name="sendConfirmation"
              onChange={formik.handleChange}
              value='text'
              checked={formik.values.sendConfirmation === 'text'}
            />
          </label>
          <label >
            Send me booking confirmation via email
            <input
              type="radio"
              id="sendConfirmation"
              name="sendConfirmation"
              onChange={formik.handleChange}
              value='email'
              checked={formik.values.sendConfirmation === 'email'}
            />
          </label>
          </fieldset>

          <input className={styles['ConfirmedBooking-btn']} type="submit" value="Book" />
        </form>
      </Main>
      <Footer />
    </>

  )
}
