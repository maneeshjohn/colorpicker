import React from 'react'
import { Slider } from '@material-ui/core'
import './navigation.css'

const Navigation = ({ value, onSlide }) => {

  const onChange = (_, newValue) => {
    onSlide(newValue)
  }

  return(
    <div className="navigation">
      <h5>ColorPicker</h5>
      <div className="slider">
        <Slider
          min={ 100 }
          max={ 900 }
          step={ 100 }
          defaultValue={ value }
          onChange={ onChange }
        />
      </div>
    </div>
  )
}

export default Navigation