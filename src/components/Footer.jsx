import React from 'react'
import { makeStyles } from '@material-ui/styles'
import styles from '../styles/footerStyles'

const Footer = ({ name, emoji }) => {

  const useStyles = makeStyles(styles)
  const classes = useStyles()

  return(
    <footer className={ classes.root }>
      { name }
      <span className={ classes.emoji }>{ emoji }</span>
    </footer>
  )
}

export default Footer