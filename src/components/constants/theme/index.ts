
import palette from './palette'
import typography from './typography'

const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.4, 1)'
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300
  }
}

const zIndex = {}

const theme = {
  palette,
  typography,
  transitions,
  zIndex,
  spacing: 6
}

export default theme