import React from 'react'
import './Image.css'

const Image = ({ srcImg, imgAlt }) => {
  return (
    <img
      src={srcImg}
      className="figure-img mt-3 d-block m-auto"
      alt={imgAlt}
    />
  )
}

export default Image
