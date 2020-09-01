export default {
  navigation: {
    background: '#fff',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    '& h5': {
      margin: 0,
      padding: '1.5%',
      color: '#333',
      background: '#eee',
      fontWeight: 100,
      cursor: 'pointer'
    }
  },
  sliderContainer: {
    width: '350px',
    marginLeft: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    '& .MuiSlider-track': {
      background: '#ddd'
    },
    '& .MuiSlider-rail': {
      background: '#ccc'
    },
    '& .MuiSlider-thumb': {
      background: '#888'
    },
    '& .MuiSlider-thumb:after': {
      display: 'none'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    paddingRight: '1%',
    '& .MuiInputBase-input': {
      fontSize: '12px !important'
    },
    '& .MuiListItem-gutters': {
      fontSize: '12px !important'
    },
    '& .MuiSelected': {
      fontSize: '12px !important'
    }
  }
}