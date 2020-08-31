import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './color-box.css'

const ColorBox = ({ background, name }) => {

  const [showOverlay, setShowOverlay] = useState(false)

  const handleClick = () => {
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 2000)
  }

  return(
    <CopyToClipboard text={ background }>
      <div
        className="color-box"
        style={{ background }}
        onClick={ handleClick }
      >
        <div
          style={{ background }}
          className={`color-overlay ${showOverlay && 'visible'}`}
        />
        <div className={`alert-message ${showOverlay && 'visible'}`}>
          <h1>COPIED!</h1>
          <p>{ background }</p>
        </div>
        <div className="copy-wrapper">
          <div className="color-details">{ name }</div>
          <button className="copy-button">COPY</button>
          <span className="see-more">More</span>
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox