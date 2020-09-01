import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Slider, Select, MenuItem, Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import './navigation.css'

const Navigation = ({ value, format, onSlide, onChange }) => {

  const [open, setOpen] = useState(false)
  const history = useHistory()

  const closeSnackbar = () => setOpen(false)

  const onSliderChange = (_, newValue) => onSlide(newValue)

  const onFormatChange = e => {
    onChange(e)
    setOpen(true)
  }

  return(
    <div className="navigation">
      <h5 onClick={ () => history.push('/') }>Color Picker</h5>
      <div className="slider">
        <Slider
          min={ 100 }
          max={ 900 }
          step={ 100 }
          defaultValue={ value }
          onChange={ onSliderChange }
        />
      </div>
      <div className="select-container">
        <Select
          value={ format }
          onChange={ onFormatChange }
        >
          <MenuItem value="hex">Hex - #FFFFFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
        </Select>
      </div>
      <Snackbar
        open={ open }
        autoHideDuration={ 2500 }
        message="Format changed!"
        onClose={ closeSnackbar }
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        action={[
          <IconButton
            color="inherit"
            onClick={ closeSnackbar }
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  )
}

export default Navigation