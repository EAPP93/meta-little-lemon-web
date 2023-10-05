import React from 'react'
import PropTypes from 'prop-types'
import styles from './menu-dishes.module.css'
import Dish from '../../components/dish/Dish'
import { useSizeContext } from '../../context/SizeProvider'
export default function MenuDishes ({ style }) {
  const size = useSizeContext()
  const DataDishes = [
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      getImg: () => require('../../assets/img/greek-salad-min.png')
    },
    {
      name: 'Bruchetta',
      price: 12.99,
      about: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      getImg: () => require('../../assets/img/bruchetta-min.png')
    },
    {
      name: 'Lemon Dessert',
      price: 12.99,
      about: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImg: () => require('../../assets/img/lemon-dessert-min.png')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      getImg: () => require('../../assets/img/greek-salad-min.png')
    },
    {
      name: 'Bruchetta',
      price: 12.99,
      about: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      getImg: () => require('../../assets/img/bruchetta-min.png')
    },
    {
      name: 'Lemon Dessert',
      price: 12.99,
      about: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImg: () => require('../../assets/img/lemon-dessert-min.png')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      getImg: () => require('../../assets/img/greek-salad-min.png')
    },
    {
      name: 'Bruchetta',
      price: 12.99,
      about: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      getImg: () => require('../../assets/img/bruchetta-min.png')
    },
    {
      name: 'Lemon Dessert',
      price: 12.99,
      about: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImg: () => require('../../assets/img/lemon-dessert-min.png')
    }
  ]
  return (
    <section className={`${styles.MenuDishes} ${style}`} >
      {
        DataDishes.map((dish, index) => {
          return <Dish key={index} name={dish.name} price={dish.price} about={dish.about} size={size} img={dish.getImg}/>
        })
      }
    </section>
  )
}

MenuDishes.propTypes = {
  style: PropTypes.string
}
