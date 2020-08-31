import React from 'react'
import ColorBox from './ColorBox'
import './palette.css'

const Palette = ({ palette }) => {
  console.log(palette)

  const colorBoxes = palette.colors[500].map(color => (
    <ColorBox
      key={ color.name }
      name={ color.name }
      background={ color.hex }
    />
  ))

  return(
    <div className="palette">
      <div className="palette-colors">
        { colorBoxes }
      </div>
    </div>
  )
}

export default Palette