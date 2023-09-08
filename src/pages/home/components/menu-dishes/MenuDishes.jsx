import React from 'react'
import styles from './menu-dishes.module.css'
import Dish from '../../../../components/dish/Dish'
export default function MenuDishes () {
  const DataDishes = [
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    },
    {
      name: 'Greek Salad',
      price: 12.99,
      about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      getImg: () => require('../../../../assets/img/greek-salad.jpg')
    }
  ]
  return (
    <section className={styles.MenuDishes}>
      {
        DataDishes.map((dish, index) => {
          return <Dish key={index} name={dish.name} price={dish.price} about={dish.about} img={dish.getImg}/>
        })
      }
    </section>
  )
}
