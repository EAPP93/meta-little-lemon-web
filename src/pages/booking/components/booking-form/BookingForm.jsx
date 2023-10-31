import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import styles from './booking-form.module.css'
export default function BookingForm ({ dispatch, availableTimes, submitForm }) {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: ' --- ',
      diners: 1,
      occasion: 'birthday',
      seating: 'standard'
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string().oneOf(['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'], 'Invalid option')
        .required('Time is required'),
      diners: Yup.number()
        .min(1, 'Minimum of 1 guest')
        .max(10, 'Maximum of 10 guests')
        .required('Number of guests is required'),
      occasion: Yup.string().oneOf(['birthday', 'anniversary', 'others'], 'Invalid option')
        .required('Occasion is required'),
      seating: Yup.string().required('Seating is required')
    }),
    onSubmit: values => {
      submitForm(JSON.stringify(values, null, 2))
    }
  })

  return (
    <form role='form' aria-label='date booking' className={styles.BookingForm} onSubmit={formik.handleSubmit} >
      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="date">Date: </label>
        <input
          className={styles['BookingForm-input']}
          type="date"
          id="date"
          name="date"
          onChange={(event) => {
            dispatch({ type: 'UPDATE_TIMES', payload: event.target.value })
            formik.handleChange(event)
          }}
          value={formik.values.date}
        />
        {
          formik.touched.date && formik.errors.date
            ? (<div className={styles['BookingForm-error']}>{formik.errors.date}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="time">Time: </label>
        <select
          className={styles['BookingForm-input']}
          id="time"
          name="time"
          placeholder='----'
          onChange={formik.handleChange}
          value={formik.values.time}
        >
          {availableTimes?.map(time => <option key={time}>{time}</option>)}
        </select>
        {
          formik.touched.time && formik.errors.time
            ? (<div className={styles['BookingForm-error']}>{formik.errors.time}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="diners">Diners: </label>
        <input
          className={styles['BookingForm-input']}
          type="number"
          id="diners"
          name="diners"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.diners}
        />
        {
          formik.touched.diners && formik.errors.diners
            ? (<div className={styles['BookingForm-error']}>{formik.errors.diners}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-container']}>
        <label className={styles['BookingForm-label']} htmlFor="occasion">Occasion: </label>
        <select
          className={styles['BookingForm-input']}
          id="occasion"
          name="occasion"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.occasion}
        >
          <option value={'birthday'}>Birthday</option>
          <option value={'anniversary'}>Anniversary</option>
          <option value={'others'}>Others</option>
        </select>
        {
          formik.touched.occasion && formik.errors.occasion
            ? (<div className={styles['BookingForm-error']}>{formik.errors.occasion}</div>)
            : null
        }
      </fieldset>

      <fieldset className={styles['BookingForm-radio']}>
        <legend className={styles['BookingForm-legend']}>Seating Options</legend>
        <section className={styles['BookingForm-section']}>
          <label className={styles['BookingForm-labelRadio']}>
            Standar options
            <input
              type="radio"
              id="seating"
              name="seating"
              onChange={formik.handleChange}
              value='standard'
              checked={formik.values.seating === 'standard'}
            />
          </label>
          <label className={styles['BookingForm-labelRadio']}>
            Outside
            <input
              type="radio"
              id="seating"
              name="seating"
              onChange={formik.handleChange}
              value='outside'
              checked={formik.values.seating === 'outside'}
            />
          </label>
        </section>
      </fieldset>

      <input className={styles['BookingForm-btn']} type="submit" value="Lets go" />
    </form>
  )
}

BookingForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  availableTimes: PropTypes.arrayOf(PropTypes.string),
  submitForm: PropTypes.func.isRequired
}
