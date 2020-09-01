import React from 'react'
import { Link } from 'react-router-dom'
import './palette-list.css'

const PaletteList = ({ palettes, history }) => {

  const listPalettes = palettes.map(palette => (
    <Link to={`/palettes/${palette.id}`}>
      <h4>
        { palette.paletteName }
      </h4>
    </Link>
  ))

  return(
    <div className="palette-list">
      <div className="container">
        
      </div>
      { listPalettes }
    </div>
  )
}

export default PaletteList