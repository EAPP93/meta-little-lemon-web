import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './booking-form.module.css'
import { useDateContext } from '../../../../context/DateProvider.jsx'
export default function BookingForm () {
  const { state, dispatch } = useDateContext()
  const dateRef = useRef()

  dateRef.current = new Date().toLocaleDateString

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: dateRef })
  }, [])

  const handleDateChange = event => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: event.target.value })
    dateRef.current = event.target.value
  }

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      Diners: 1,
      occasion: 'Birthday'
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string().required('Time is required'),
      Diners: Yup.number()
        .min(1, 'Minimum of 1 guest')
        .max(10, 'Maximum of 10 guests')
        .required('Number of guests is required'),
      occasion: Yup.string().required('Occasion is required'),
      seating: Yup.string().required('Occasion is required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <form className={styles.BookingForm} onSubmit={formik.handleSubmit} >
      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="date">Date: </label>
        <input
          className={styles['BookingForm-input']}
          type="date"
          id="date"
          name="date"
          placeholder='Date'
          onChange={(event) => {
            handleDateChange(event)
            formik.handleChange(event)
          }}
          value={formik.values.date}
        />
        {
          formik.touched.date && formik.errors.date
            ? (<div>{formik.errors.date}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="time">Time</label>
        <select
          className={styles['BookingForm-input']}
          id="time"
          name="time"
          onChange={formik.handleChange}
          value={formik.values.time}
        >
          {state.availableTimes.map(time => <option key={time}>{time}</option>)}
        </select>
        {
          formik.touched.time && formik.errors.time
            ? (<div>{formik.errors.time}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="Diners">Diners</label>
        <input
          className={styles['BookingForm-input']}
          type="number"
          id="Diners"
          name="Diners"
          onChange={formik.handleChange}
          value={formik.values.Diners}
        />
        {
          formik.touched.Diners && formik.errors.Diners
            ? (<div>{formik.errors.Diners}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="occasion">Occasion</label>
        <select
          className={styles['BookingForm-input']}
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Others</option>
        </select>
        {
          formik.touched.occasion && formik.errors.occasion
            ? (<div>{formik.errors.occasion}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-radio']}>
        <legend className={styles['BookingForm-legend']}>Seating Options</legend>
        <section className={styles['BookingForm-section']}>
          <label className={styles['BookingForm-labelRadio']}>
            Standar options
            <input
              className={styles['BookingForm-inputRadio']}
              type="radio"
              name="seating"
              value="standard"
              onChange={formik.handleChange}
              checked={formik.values.seating === 'standard'}
            />
          </label>
          <label className={styles['BookingForm-labelRadio']}>
            Outside
            <input
              className={styles['BookingForm-inputRadio']}
              type="radio"
              name="seating"
              value="outside"
              onChange={formik.handleChange}
              checked={formik.values.seating === 'outside'}
            />
          </label>
        </section>
      </fieldset>

      <input className={styles['BookingForm-btn']} type="submit" value="Make Your Reservation" />
    </form>
  )
}
