import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import styles from '../styles/singleColorPaletteStyles'
import ColorBox from './ColorBox'
import Navigation from './Navigation'
import Footer from './Footer'

const SingleColorPalette = ({ palette, colorId }) => {

  const useStyles = makeStyles(styles)
  const classes = useStyles()

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
      key={ color.name }
      background={ color.hex }
      name={ color.name }
      showLink={ false }
    />
  ))
 
  return(
    <div className={ classes.palette }>
      <Navigation />
      <div className={ classes.paletteColors }>
        { colorBoxes }
        <div className={ classes.goBack }>
          <Link to={`/palettes/${palette.id}`}>
            <span className={ classes.backButton }>GO BACK</span>
          </Link>
        </div>
      </div>
      <Footer
        name={ `${palette.paletteName} - ${colorId}` }
        emoji={ palette.emoji }
      />
    </div>
  )
}

export default SingleColorPalette