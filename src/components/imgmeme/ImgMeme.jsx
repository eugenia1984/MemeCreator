import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import html2canvas from 'html2canvas'
import Swal from 'sweetalert2'
import Subtitle from '../atoms/headlines/Subtitle'
import Figure from '../molecule/Figure'
import { options } from '../../utils/utils'
import Button from '../atoms/button/Button'
import './ImgMeme.css'
import InputForm from '../atoms/input/InputForm'
import LabelForm from '../atoms/label/LabelForm'

const ImgMemes = () => {
  const d = document
  const [memeImg, setMemeImg] = useState('1')
  const [memeTextUp, setMemeTextUp] = useState('')
  const [memeTextDown, setMemeTextDown] = useState('')
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: '31',
    g: '112',
    b: '19',
    a: '1'
  })
  const Swal = require('sweetalert2')

  const handleMemeImg = (e) => {
    setMemeImg(e.target.value)
  }

  const handleMemeTextUp = (e) => {
    setMemeTextUp(e.target.value)
  }

  const handleMemeTextDown = (e) => {
    setMemeTextDown(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    html2canvas(d.querySelector('#exportar')).then(function (canvas) {
      const img = canvas.toDataURL('memes/jpg')
      const link = d.createElement('a')
      link.download = 'new-meme.jpg'
      link.href = img
      link.click()
    })
    // reset to intial state
    setMemeImg('1')
    setMemeTextUp('')
    setMemeTextDown('')
    setSketchPickerColor({
      r: '31',
      g: '112',
      b: '19',
      a: '1'
    })
    // confirm alert
    Swal.fire({
      icon: 'success',
      title: 'Congratas!',
      text: 'The meme has been downloaded'
    })
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <LabelForm
            htmlFor="meme1"
            text="Enter the text of your meme to be shown on the top of the image"
          />
          <InputForm
            onChange={handleMemeTextUp}
            value={memeTextUp}
            name="meme1"
            id="meme1"
          />
          <LabelForm
            htmlFor="meme2"
            text="Enter the text of your meme to be shown at the bottom of the image"
          />
          <InputForm
            onChange={handleMemeTextDown}
            value={memeTextDown}
            name="meme2"
            id="meme2"
          />
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
          <section className="my-5 sketchpicker">
            <SketchPicker
              onChange={(color) => {
                setSketchPickerColor(color.rgb)
              }}
              color={sketchPickerColor}
            />
          </section>
          <section className="newMeme">
            <Figure
              memeTextUp={memeTextUp}
              memeTextDown={memeTextDown}
              memeImg={memeImg}
              imgAlt="meme"
              sketchPickerColor={sketchPickerColor}
            />
          </section>
          <Button type="submit" btnText="Download meme" />
        </form>
      </section>
    </>
  )
}

export default ImgMemes
