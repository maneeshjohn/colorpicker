import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import getStyles from '../styles/colorBoxStyles'

const ColorBox = ({ background, name, url, showLink }) => {

  const [showOverlay, setShowOverlay] = useState(false)
  const useStyles = makeStyles(getStyles(background, showLink))
  const classes = useStyles()

  const handleClick = () => {
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 2000)
  }

  return(
    <CopyToClipboard text={ background }>
      <div
        className={ classes.root }
        style={{ background }}
        onClick={ handleClick }
      >
        <div
          style={{ background }}
          className={`${classes.colorOverlay} ${showOverlay && classes.showOverlay}`}
        />
        <div className={`${classes.alertMessage} ${showOverlay && classes.showMessage}`}>
          <h1>COPIED!</h1>
          <p className={ classes.colorName }>{ background }</p>
        </div>
        <div>
          <div className={ classes.colorDetails }>{ name }</div>
          <button className={ classes.copyButton }>COPY</button>
          {showLink && (
            <Link to={ url } onClick={ e => e.stopPropagation() }>
              <span className={ classes.seeMore }>More</span>
            </Link>
          )}
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox