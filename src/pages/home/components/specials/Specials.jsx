import React from 'react'
import styles from './specials.module.css'
import Dish from '../../../../components/dish/Dish'

export default function Specials () {
  const dataDishes = [
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Bruchetta',
      price: 12.99,
      about: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      getImg: () => require('../../../../assets/img/bruchetta.jpg')
    },
    {
      name: 'Lemon Dessert',
      price: 12.99,
      about: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImg: () => require('../../../../assets/img/lemon dessert.jpg')
    }
  ]
  return (
    <section className={styles.Specials}>
      <div>
        <h2>Specials</h2>
        <button>
          Online Menu
        </button>
      </div>
      <div>
        {
          dataDishes.map((dish, index) => {
            return (
              <Dish key={index} name={dish.name} price={dish.price} about={dish.about} img={dish.getImg} />
            )
          })
        }
      </div>
    </section>
  )
}
