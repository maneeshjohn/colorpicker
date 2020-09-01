import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'
import Palette from './components/Palette'
import SingleColorPalette from './components/SingleColorPalette'
import palettes from './contexts/palettes'
import { generatePalette } from './utils/colorHelper'

const findPalette = id => palettes.find(palette => palette.id === id)

const App = () => {

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ props => <PaletteList { ...props } palettes={ palettes } /> }
      />
      <Route
        exact
        path="/palettes/:id"
        render={ props => (
          <Palette
            { ...props }
            palette={ generatePalette(findPalette(props.match.params.id)) }
          />
        )}
      />
      <Route
        exact
        path="/palettes/:paletteId/:colorId"
        render={ props => (
          <SingleColorPalette
            { ...props }
            colorId={ props.match.params.colorId }
            palette={ generatePalette(findPalette(props.match.params.paletteId)) }
          />
        )}
      />
    </Switch>
  )
}

export default App
