import React from 'react'
import { makeStyles } from '@material-ui/styles'

const MiniPalette = ({ palette, handleClick }) => {

  const useStyles = makeStyles({
    root: {
      background: '#fff',
      borderRadius: '.25rem',
      position: 'relative',
      overflow: 'hidden',
      padding: '.5rem',
      cursor: 'pointer'
    },
    colors: {
      background: 'grey',
      width: '100%',
      height:  '110px',
      borderRadius: '.25rem',
      overflow: 'hidden'
    },
    colorBlock: {
      width: '20%',
      height: '25%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '-4px'
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2%',
      color: '#333',
      fontSize: '.8rem',
      textDecoration: 'none',
      margin: 0
    },
    emoji: {
      fontSize: '1rem'
    }
  })

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