import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const lightTheme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: ['Roboto', 'Raleway', 'Open Sans'].join(','),
      h1: {
        fontSize: '5rem',
        fontFamily: 'Raleway'
      },
      h2: {
        fontSize: '3.5rem',
        fontFamily: 'Open Sans',
        fontStyle: 'bold'
      },
      h3: {
        fontSize: '2.5rem',
        fontFamily: 'Roboto'
      },
      subtitle1: {
        fontSize: '1.2rem',
        fontFamily: 'Roboto'
      }
    },
    palette: {
      background: {
        default: '#FFFFFF'
      },
      primary: {
        main: '#1e90ff'
      },
      secondary: {
        main: '#E769A6'
      },
      error: {
        main: '#D72A2A'
      },
      warning: {
        main: '#FC7B09'
      },
      info: {
        main: '#64748b'
      },
      success: {
        main: '#09FE00'
      },
      text: {
        primary: '#000000',
        secondary: '#FFFFFF'
      }
    }
  })
);

export default lightTheme;
