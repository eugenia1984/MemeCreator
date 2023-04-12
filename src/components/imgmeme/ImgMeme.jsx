import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import Subtitle from '../atoms/headlines/Subtitle'
import Figure from '../molecule/Figure'
import { options } from '../../utils/utils'
import Button from '../atoms/Button'

const ImgMemes = () => {
  const d = document
  const [memeImg, setMemeImg] = useState('1')
  const [memeText, setMemeText] = useState('')

  const handleMemeImg = (e) => {
    setMemeImg(e.target.value)
  }

  const handleMemeText = (e) => {
    setMemeText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    html2canvas(d.querySelector('#exportar')).then(function (canvas) {
      //document.body.appendChild(canvas)
      let img = canvas.toDataURL('memes/jpg')
      let link = d.createElement('a')
      link.download = 'new-meme.jpg'
      link.href = img
      link.click()
    })
    // reset to intial state
    setMemeImg('1')
    setMemeText('')
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <Subtitle subtitleText="Enter the text of your meme" />
          <input
            onChange={handleMemeText}
            className="form-control w-50 m-50 m-auto d-block"
            type="text"
            placeholder="Put your phrase"
            name="meme"
            arial-label="meme's phrase"
            value={memeText}
          ></input>
          <Subtitle subtitleText="Choose your image" />
          <select
            onChange={handleMemeImg}
            className="form-select form-select-lg mb-3 w-50 m-auto"
            arial-label=".form-select-lg example"
            value={memeImg}
          >
            {options.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              )
            })}
          </select>
          <Figure memeText={memeText} memeImg={memeImg} imgAlt="meme" />
          <Button type="submit" btnText="Download meme" />
        </form>
      </section>
    </>
  )
}

export default ImgMemes
