import React, { useMemo } from 'react'
import ColorBox from './ColorBox'

const SingleColorPalette = ({ palette, colorId }) => {

  const generateSingleColorPalette = () => {
    let newPalette = []
    for(let key in palette.colors){
      newPalette.push(palette.colors[key].find(color => color.id === colorId))
    }
    return newPalette.slice(1)
  }

  const singlePalette = useMemo(generateSingleColorPalette, [colorId])

  const colorBoxes = singlePalette.map(color => (
    <ColorBox
      key={ color.id }
      background={ color.hex }
      name={ color.name }
      showLink={ false }
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

export default SingleColorPalette