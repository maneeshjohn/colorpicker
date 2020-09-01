import React from 'react'
import { makeStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'
import './palette-list.css'

const PaletteList = ({ palettes, history }) => {

  const useStyles = makeStyles({
    root: {
      background: 'blue',
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    container: {
      display: 'flex',
      width: '50%',
      alignItems: 'flrx-start',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: '1.25rem',
      color: '#fff'
    },
    palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 30%)',
      gridGap: '5%'
    }
  })

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