import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './booking-form.module.css'
import { useDateContext } from '../../../../context/DateProvider.jsx'
export default function BookingForm () {
  const { state } = useDateContext()

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
      occasion: Yup.string().required('Occasion is required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <form className={styles.BookingForm} onSubmit={formik.handleSubmit} >
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      {
        formik.touched.date && formik.errors.date
          ? (<div>{formik.errors.date}</div>)
          : null
      }

      <label htmlFor="time">Time</label>
      <select
        id="time"
        name="time"
        onChange={formik.handleChange}
        value={formik.values.time}
      >
      { state.availableTimes.map(time => <option key={time}>{time}</option>) }
      </select>
      {
        formik.touched.time && formik.errors.time
          ? (<div>{formik.errors.time}</div>)
          : null
      }

      <label htmlFor="Diners">Number of Diners</label>
      <input
        type="number"
        id="Diners"
        name="Diners"
        min="1"
        max="10"
        onChange={formik.handleChange}
        value={formik.values.Diners}
      />
      {
        formik.touched.Diners && formik.errors.Diners
          ? (<div>{formik.errors.Diners}</div>)
          : null
      }

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={formik.handleChange}
        value={formik.values.occasion}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {
        formik.touched.occasion && formik.errors.occasion
          ? (<div>{formik.errors.occasion}</div>)
          : null
      }

      <input type="submit" value="Make Your Reservation" />
    </form>
  )
}

/*
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>
*/
