import Typography from 'typography';
const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: .8,
  headerFontFamily: [
    'Titillium Web',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Titillium Web',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Titillium Web',
      styles: ['300', '400', '700'],
    },
  ],
});
export default typography;
