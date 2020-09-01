import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './palette.css'
import Navigation from './Navigation'

const Palette = ({ palette }) => {

  const [sliderValue, setSliderValue] = useState(500)
<<<<<<< HEAD
  const [format, setFormat] = useState('hex')
  
  const onSlide = value => setSliderValue(value)

  const onFormatChange = e => setFormat(e.target.value)
=======
  
  const onSlide = value => {
    setSliderValue(value)
  }
>>>>>>> ba2149779ed49ca09d00a24e1dd7b20d28a20ad6

  const colorBoxes = palette.colors[sliderValue].map(color => (
    <ColorBox
      key={ color.name }
      name={ color.name }
      background={ color[format] }
    />
  ))

  return(
    <div className="palette">
      <Navigation
<<<<<<< HEAD
        format={ format }
        value={ sliderValue }
        onSlide={ onSlide }
        onChange={ onFormatChange }
=======
        value={ sliderValue }
        onSlide={ onSlide }
>>>>>>> ba2149779ed49ca09d00a24e1dd7b20d28a20ad6
      />
      <div className="palette-colors">
        { colorBoxes }
      </div>
      <footer>
        { palette.paletteName }
        <span className="emoji">{ palette.emoji }</span>
      </footer>
    </div>
  )
}

export default Palette