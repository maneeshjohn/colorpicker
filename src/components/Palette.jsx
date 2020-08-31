import React, { useState } from 'react'
import ColorBox from './ColorBox'
import './palette.css'
import Navigation from './Navigation'

const Palette = ({ palette }) => {

  const [sliderValue, setSliderValue] = useState(500)
  
  const onSlide = value => {
    setSliderValue(value)
  }

  const colorBoxes = palette.colors[sliderValue].map(color => (
    <ColorBox
      key={ color.name }
      name={ color.name }
      background={ color.hex }
    />
  ))

  return(
    <div className="palette">
      <Navigation
        value={ sliderValue }
        onSlide={ onSlide }
      />
      <div className="palette-colors">
        { colorBoxes }
      </div>
    </div>
  )
}

export default Palette