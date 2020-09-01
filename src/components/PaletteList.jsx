import React from 'react'
import { makeStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'
import styles from '../styles/paletteListStyles'

const PaletteList = ({ palettes, history }) => {

  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const viewPalette = id => history.push(`/palettes/${id}`)

  const listPalettes = palettes.map(palette => (
    <MiniPalette
      palette={ palette }
      handleClick={ viewPalette }
    />
  ))

  return(
    <div className={ classes.root }>
      <div className={ classes.container }>
        <div className={ classes.nav }>
          <h1 className={ classes.title }>Color Picker</h1>
        </div>
        <div className={ classes.palettes }>
          { listPalettes }
        </div>
      </div>
    </div>
  )
}

export default PaletteList