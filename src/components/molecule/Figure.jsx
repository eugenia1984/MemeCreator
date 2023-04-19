import React from 'react'
import Image from '../atoms/memeImg/Image'
import './Figure.css'

const Figure = ({
  imgAlt,
  memeTextUp,
  memeTextDown,
  memeImg,
  sketchPickerColor
}) => {
  const { r, g, b, a } = sketchPickerColor

  return (
    <figure className="text-center" id="exportar">
      <p
        className="w-100 px-30 h1 text-center"
        style={{ color: `rgba(${r},${g},${b},${a})` }}
      >
        {memeTextUp}{' '}
      </p>
      <Image srcImg={memeImg} imgAlt={imgAlt} />
      <p
        className="w-100 px-30 h1 text-center "
        style={{ color: `rgba(${r},${g},${b},${a})` }}
      >
        {memeTextDown}
      </p>
    </figure>
  )
}

export default Figure
