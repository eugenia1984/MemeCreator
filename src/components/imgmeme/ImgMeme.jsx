import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import html2canvas from 'html2canvas'
import Subtitle from '../atoms/headlines/Subtitle'
import Figure from '../molecule/Figure'
import Button from '../atoms/button/Button'
import './ImgMeme.css'
import InputForm from '../atoms/input/InputForm'
import LabelForm from '../atoms/label/LabelForm'

const ImgMemes = () => {
  const d = document
  const [memeImg, setMemeImg] = useState('https://i.imgflip.com/1g8my4.jpg')
  const [memeTextUp, setMemeTextUp] = useState('')
  const [memeTextDown, setMemeTextDown] = useState('')
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: '31',
    g: '112',
    b: '19',
    a: '1'
  })
  const [allMemes, setAllMemes] = useState([])
  const node = d.querySelector('#exportar')
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
    html2canvas(node, { allowTaint: true, useCORS: true }).then(function (
      canvas
    ) {
      const img = canvas.toDataURL('memes/jpg')
      const link = d.createElement('a')
      link.download = 'new-meme.jpg'
      link.href = img
      link.click()
    })
    // reset to intial state
    setMemeImg('https://i.imgflip.com/1g8my4.jpg')
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
      title: 'Congrats!',
      text: 'The meme has been downloaded'
    })
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setAllMemes(data.data.memes.slice(0, 11))
    }
    getMemes()
  }, [])

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <LabelForm
                htmlFor="meme1"
                text="1 - Enter the text of your meme to be shown on the top of the image"
              />
              <InputForm
                onChange={handleMemeTextUp}
                value={memeTextUp}
                name="meme1"
                id="meme1"
              />
              <LabelForm
                htmlFor="meme2"
                text="2 - Enter the text of your meme to be shown at the bottom of the image"
              />
              <InputForm
                onChange={handleMemeTextDown}
                value={memeTextDown}
                name="meme2"
                id="meme2"
              />
              <Subtitle subtitleText="3 - Choose your image" />
              <select
                onChange={handleMemeImg}
                className="form-select form-select-lg mb-3 w-100 m-auto"
                arial-label=".form-select-lg example"
                value={memeImg}
              >
                {allMemes.map((meme) => {
                  return (
                    <option key={meme.id} value={meme.url}>
                      {meme.name}
                    </option>
                  )
                })}
              </select>
              <Subtitle subtitleText="4- Choose the color of the text" />
              <section className="my-5 sketchpicker">
                <SketchPicker
                  onChange={(color) => {
                    setSketchPickerColor(color.rgb)
                  }}
                  color={sketchPickerColor}
                />
              </section>
            </div>
            <div className="col-sm-12 col-lg-6 showMeme">
              <Subtitle subtitleText="Your meme" />
              <section className="newMeme">
                <Figure
                  memeTextUp={memeTextUp}
                  memeTextDown={memeTextDown}
                  memeImg={memeImg}
                  imgAlt="meme"
                  sketchPickerColor={sketchPickerColor}
                />
              </section>
            </div>
          </div>
          <div className="col-sm-12">
            <Button type="submit" btnText="Download meme" />
          </div>
        </form>
      </section>
    </>
  )
}

export default ImgMemes
