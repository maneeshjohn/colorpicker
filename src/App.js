import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'
import Palette from './components/Palette'
import palettes from './contexts/palettes'
import { generatePalette } from './utils/colorHelper'

const findPalette = id => palettes.find(palette => palette.id === id)

const App = () => {

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ () => <PaletteList palettes={ palettes } /> }
      />
      <Route
        exact
        path="/palettes/:id"
        render={ ({ match }) => (
          <Palette
            palette={ generatePalette(findPalette(match.params.id)) }
          />
        )}
      />
    </Switch>
  )
}

export default App
