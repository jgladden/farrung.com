const palette = {
  text: {   
    primary: "#333",
    neutral: "#b6b6b6",
    dark: '#666',
    link: "#ff6f6f",
    alert: "#FF4545",
    contrast: "#FFF",
    action: "#33CC99"
  },
  background: {
    main: "#FFF",
    light: "#F1F1F1",
    dark: "#000",
    link: "#ff6f6f",
  }
}

const fontPrimary = 'DinAlternateLight'
const fontSans = ['Tahoma', 'Geneva', 'sans-serif'].join(',')
const fontSerif = ['Times New Roman', 'Times', 'serif'].join(',')

const hType = {
  fontFamily: fontPrimary,
  fontWeight: 'normal',
  lineHeight: '1.2em',
  margin: 0,
  padding: 0
}

const typography = {
  h1: {
    ...hType,
    fontSize: '11.8em',
    letterSpacing: '-0.05em',
  },
  h2: {
    ...hType,
    fontSize: '10em',
    letterSpacing: '-0.05em',
  },
  h3: {
    ...hType,
    fontSize: '5em',
  },
  h4: {
    ...hType,
    fontSize: '30px',
    letterSpacing: '-0.05em',
  },
  h5: {
    ...hType,
    fontSize: '26px',
  },
  body1: {
    fontFamily: fontSans,
    fontSize: '14px',
    lineHeight: '19px'
  },
  body2: {
    fontFamily: fontSans,
    fontSize: '13px',
    letterSpacing: '1px',
    lineHeight: '19px'
  },
  body3: {
    fontFamily: fontSans,
    fontSize: '11px',
    letterSpacing: '-0.05em',
    lineHeight: '19px'
  },
  body4: {
    fontFamily: fontSans,
    fontSize: '10px',
    letterSpacing: '-0.05em',
    lineHeight: '19px'
  },
  meta: {
    fontFamily: fontSerif,
    fontSize: '12px',
    letterSpacing: '1px',
    lineHeight: '19px'
  },
  button: {
    fontFamily: fontSans,
    fontSize: '11px',
    letterSpacing: '-0.05em',
    lineHeight: '19px'
  },
}

const theme = {
  palette,
  typography,
  spacing: 6
}

export default theme