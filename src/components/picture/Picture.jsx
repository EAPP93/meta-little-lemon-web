import React from 'react'
import PropTypes from 'prop-types'
import styles from './picture.module.css'
export default function Picture ({ defaultImage = { src: '#', alt: '' }, list = [{ type: 'image/jpeg', srcSet: '#', sizes: '', alt: '' }], style }) {
  return (
    <picture className={styles.Picture} style={style}>
      {
        list.map((el, index) => {
          return <source key={index}
          type={el.type}
          srcSet={el.srcSet}
          sizes={el.sizes}
          />
        })
      }
      <img loading='lazy' className={styles['Picture-img']} src={defaultImage.src} alt={defaultImage.alt} />
   </picture>
  )
}

Picture.propTypes = {
  defaultImage: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  })),
  style: PropTypes.object
}
