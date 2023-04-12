import React from 'react'
import Image from '../atoms/Image'
import './Figure.css'

const Figure = ({ imgAlt, memeText, memeImg }) => {
  return (
    <figure className="text-center" id="exportar">
      <p className="w-100 px-30 position-absolute top-50 start-30  h1 text-center ">
        {memeText}{' '}
      </p>
      <Image srcImg={memeImg} imgAlt={imgAlt} />
    </figure>
  )
}

export default Figure
