import React from 'react'
import styles from './customers-say.module.css'
import Picture from '../../../../components/picture/Picture'

export default function Testimonials () {
  const Start = () => require('../../../../assets/img/start.png')
  const Customers = [
    {
      rating: 5,
      name: 'John',
      getImg: () => require('../../../../assets/img/john-min.jpg'),
      review: 'todo bien'
    },
    {
      rating: 3,
      name: 'Veronica',
      getImg: () => require('../../../../assets/img/veronica-min.jpg'),
      review: 'algo caro'
    },
    {
      rating: 4,
      name: 'Jose',
      getImg: () => require('../../../../assets/img/jose-min.jpg'),
      review: 'lorem ipsum dolor sit amet consectetur adipisicing elit'
    }
  ]

  const counterStarts = (number) => {
    const starts = []
    for (let i = 0; i < number; i++) {
      starts.push(<Picture key={i} defaultImage={{ src: Start(), alt: 'image of one start' }} list={[]} picture={styles['Testimonials-start']} img={styles['Testimonials-img']}/>)
    }
    return starts.map(el => el)
  }

  return (
    <section className={styles.Testimonials}>
      <h2 className={styles['Testimonials-title']}>Testimonials</h2>
      <div className={styles['Testimonials-container']}>
        {
          Customers.map((el, index) => {
            return (
              <article key={index} className={styles['Testimonials-article']}>
                <header className={styles['Testimonials-header']}>
                  <p className={styles['Testimonials-rating']}>Rating</p>{ counterStarts(el.rating) }
                </header>
                <main className={styles['Testimonials-main']}>
                  <Picture defaultImage={{ src: el.getImg(), alt: `image of user ${el.name}` }} list={[]} picture={styles['Testimonials-picture']} img={styles['Testimonials-img']}/>
                  <h3 className={styles['Testimonials-name']}>{ el.name }</h3>
                </main>
                <footer className={styles['Testimonials-footer']}>
                  <p className={styles['Testimonials-review']}>{ el.review }</p>
                </footer>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
