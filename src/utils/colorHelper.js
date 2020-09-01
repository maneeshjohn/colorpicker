import chroma from 'chroma-js'

const getThemeColor = (bg) => ({
  dark: (chroma(bg).luminance() <= 0.1)? ' dark-text': '',
  light: (chroma(bg).luminance() >= 0.6)? ' light-text': ''
})

const levels = [50,100,200,300,400,500,600,700,800,900]

export const generatePalette = referencePalette => {
  const newPalette = {
    ...referencePalette,
    colors: {}
  }
  levels.forEach(level => {
    newPalette.colors[level] = []
  })
  referencePalette.colors.forEach(color => {
    let scale = generateScale(color.color).reverse()
    for(let i in scale){
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css()
      })
    }
  })
  return newPalette
}

const generateScale = (hex, noOfColors = 10) => {
  return chroma.scale(generateColorRange(hex)).mode('lab').colors(noOfColors)
}

const generateColorRange = hex => {
  const endColor = '#FFFFFF'
  return [chroma(hex).darken(1.4).hex(), hex, endColor]
}

export const getTextColors = (bg, theme = 'dark', className = '') => {
  return `${className}${getThemeColor(bg)[theme]}`
}