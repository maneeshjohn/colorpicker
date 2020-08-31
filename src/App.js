import React from 'react'
import Palette from './components/Palette'
import patettes from './contexts/palettes'
import { generatePalette } from './utils/colorHelper'

const App = () => {
  return (
    <div className="App">
      <Palette palette={ generatePalette(patettes[0]) } />
    </div>
  )
}

export default App
