import chroma from 'chroma-js'

export default (background, showLink) => ({
  root: {
    width: '20%',
    height: () => (showLink? '25%': '50%'),
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
      transition: '.5s'
    },
  },
  colorOverlay: {
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 1.5s ease-out',
    zIndex: 0
  },
  showOverlay: {
    opacity: 1,
    position: 'absolute',
    transform: 'scale(20)',
    zIndex: 5
  },
  colorDetails: {
    position: 'absolute',
    padding: '.65rem',
    width: '100%',
    left: 0,
    bottom: 0,
    fontSize: '.75rem',
    letterSpacing: '.5px',
    color: () => ((chroma(background).luminance() >= 0.2)? '#333': 'rgba(255,255,255,.7)')
  },
  copyButton: {
    position: 'absolute',
    height: '25px',
    width: '100px',
    top: '50%',
    left: '50%',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    fontSize: '.8rem',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255,.3)',
    cursor: 'pointer',
    letterSpacing: '1px',
    textAlign: 'center',
    lineHeight: '25px',
    opacity: 0,
    color: () => ((chroma(background).luminance() <= 0.6)? 'rgba(255,255,255,.7)': 'rgba(0,0,0,.5)')
  },
  alertMessage: {
    background: 'transparent',
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 0,
    transform: 'scale(.1)',
    '& h1': {
      background: 'rgba(255,255,255,.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      color: '#fff',
      fontWeight: 400,
      fontSize: '4rem',
      padding: '1rem',
      textShadow: '1px 3px rgba(0,0,0,.6)'
    },
    '& p': {
      fontWeight: 100,
      fontSize: '1.5rem'
    }
  },
  showMessage: {
    opacity: 1,
    zIndex: 6,
    transform: 'scale(1)',
    transition: 'all 1s ease-in-out',
    transitionDelay: '.5s'
  },
  colorName: {
    color: () => ((chroma(background).luminance() <= 0.6)? 'rgba(255,255,255,.7)': 'rgba(0,0,0,.5)')
  },
  seeMore: {
    position: 'absolute',
    background: 'rgba(255,255,255,0.3)',
    border: 'none',
    right: 0,
    bottom: 0,
    width: '50px',
    height: '25px',
    textAlign: 'center',
    lineHeight: '25px',
    fontSize: '.75rem',
    letterSpacing: '.5px',
    color: () => ((chroma(background).luminance() <= 0.6)? 'rgba(255,255,255,.7)': 'rgba(0,0,0,.5)')
  }
})