import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Slider, Select, MenuItem, Snackbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styles from '../styles/navigationStyles'
import CloseIcon from '@material-ui/icons/Close'

const Navigation = ({ value, format, onSlide, onChange, multiColors }) => {

  const [open, setOpen] = useState(false)
  const history = useHistory()
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const closeSnackbar = () => setOpen(false)

  const onSliderChange = (_, newValue) => onSlide(newValue)

  const onFormatChange = e => {
    onChange(e)
    setOpen(true)
  }

  return(
    <div className={ classes.navigation }>
      <h5 onClick={ () => history.push('/') }>Color Picker</h5>
      {multiColors && (
        <div className={ classes.sliderContainer }>
          <Slider
            min={ 100 }
            max={ 900 }
            step={ 100 }
            defaultValue={ value }
            onChange={ onSliderChange }
          />
        </div>
      )}
      <div className={ classes.selectContainer }>
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