import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './palette.css'
import Navigation from './Navigation'

const Palette = ({ palette }) => {

  const [sliderValue, setSliderValue] = useState(500)
  const [format, setFormat] = useState('hex')
  
  const onSlide = value => setSliderValue(value)

  const onFormatChange = e => setFormat(e.target.value)

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
        format={ format }
        value={ sliderValue }
        onSlide={ onSlide }
        onChange={ onFormatChange }
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