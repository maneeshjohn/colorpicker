import React from 'react'
import { makeStyles } from '@material-ui/styles'
import styles from '../styles/miniPaletteStyles'

const MiniPalette = ({ palette, handleClick }) => {

  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const colorBlocks = palette.colors.map(color => (
    <div
      key={ color.name }
      className={ classes.colorBlock }
      style={{ background: color.color }}
    />
  ))

  return(
    <div
      className={ classes.root }
      onClick={ () => handleClick(palette.id) }
    >
      <div className={ classes.colors }>
        { colorBlocks }
      </div>
      <h5 className={ classes.title }>
        <span>{ palette.paletteName }</span>
        <span className={ classes.emoji }>{ palette.emoji }</span>
      </h5>
    </div>
  )
}

export default MiniPalette