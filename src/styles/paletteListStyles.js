export default {
  root: {
    background: 'blue',
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container: {
    display: 'flex',
    width: '50%',
    alignItems: 'flrx-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.25rem',
    color: '#fff'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
}