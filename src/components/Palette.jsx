import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import ColorBox from './ColorBox'
import Navigation from './Navigation'
import Footer from './Footer'

const Palette = ({ palette }) => {

  const [sliderValue, setSliderValue] = useState(500)
  const [format, setFormat] = useState('hex')

  const useStyles = makeStyles({
    palette: {
      height: '100vh'
    },
    paletteColors: {
      height: '85vh',
    }
  })
  
  const classes = useStyles()

  const onSlide = value => setSliderValue(value)

  const onFormatChange = e => setFormat(e.target.value)

  const colorBoxes = palette.colors[sliderValue].map(color => (
    <ColorBox
      key={ color.name }
      name={ color.name }
      background={ color[format] }
      url={ `/palettes/${palette.id}/${color.id}` }
      showLink
    />
  ))

  return(
    <div className={ classes.palette }>
      <Navigation
        format={ format }
        value={ sliderValue }
        onSlide={ onSlide }
        onChange={ onFormatChange }
        multiColors
      />
      <div className={ classes.paletteColors }>
        { colorBoxes }
      </div>
      <Footer name={ palette.paletteName } emoji={ palette.emoji } />
    </div>
  )
}

export default Palette