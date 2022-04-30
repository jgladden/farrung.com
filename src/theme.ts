
const palette = {
  primary: {
    contrastText: "#FFFFFF",
    main: "#AC92F2",
    dark: "#7549EA",
    light: "#EAEAEA"
  },
  text: {   
    primary: "#000000",
    neutral: "#5C5C5C",
    link: "#0066FF",
    alert: "#FF4545",
    contrast: "#FFFFFF",
    action: "#33CC99"
  },
  icon: {
    primary: "#000000",
    neutral: "#5C5C5C",
    link: "#0066FF",
    alert: "#FF4545",
    contrast: "#FFFFFF",
    action: "#33CC99"
  },
  background: {
    main: "#F7F7F7",
    light: "#FFFFFF",
    mainTheme: "#7549EA",
    dark: "#5E3ABB",
    darkNeutral: "#EAEAEA"
  }
}


const typography = {
  fontFamily: ['Logical', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen'].join(','),
  h1: {
    fontWeight: 'bold',
    fontSize: '36px',
    letterSpacing: '-0.24px',
    lineHeight: '45px',
    margin: 0
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '26px',
    letterSpacing: '-0.24px',
    lineHeight: '33px',
    margin: 0
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '27px',
    margin: 0
  },
  h4: {
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '-0.06px',
    lineHeight: '23px',
    margin: 0
  },
  h5: {
    fontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
    margin: 0
  },
  h6: {
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
    margin: 0
  },
  subtitle1: {
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px'
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body1: {
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '18px'
  },
  body2: {
    fontSize: '16px',
    letterSpacing: '-0.04px',
    lineHeight: '21px'
  },
  body3: {
    fontSize: '18px',
    letterSpacing: '-0.04px',
    lineHeight: '24px'
  },
  meta: {
    fontSize: '11px',
    letterSpacing: '-0.04px',
    lineHeight: '15px'
  },
  button: {
    fontSize: '14px'
  },
  overline: {
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
}

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