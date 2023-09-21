import React from 'react'
import PropTypes from 'prop-types'
export default function Picture ({ defaultImage = { src: '#', alt: '' }, list = [{ type: 'image/jpeg', srcSet: '#', sizes: '', alt: '' }], picture, img }) {
  return (
    <picture role='img' className={picture} >
      {
        list.map((el, index) => {
          return <source key={index}
          type={el.type}
          srcSet={el.srcSet}
          sizes={el.sizes}
          />
        })
      }
      <img loading='lazy' src={defaultImage.src} alt={defaultImage.alt} className={img} />
   </picture>
  )
}

Picture.propTypes = {
  defaultImage: PropTypes.object.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string
  })),
  picture: PropTypes.string,
  img: PropTypes.string
}
