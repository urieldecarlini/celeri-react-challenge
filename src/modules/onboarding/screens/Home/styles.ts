import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    top: '30%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  image: {
    minWidth: '10%',
    maxWidth: '100%',
    maxHeight: '35vh'
  },
  centralContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    top: '55%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  centralText: {
    ...theme.typography.subtitle1,
    fontWeight: 500,
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    top: '65%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem'
  }
  // '@media (max-width: 319px)': {
  //   image: {
  //     maxWidth: '100%'
  //   }
  // },
  // '@media (min-width: 320px) and (max-width: 479px)': {
  //   image: {
  //     maxWidth: '30vh'
  //   }
  // },
  // '@media (min-width: 480px) and (max-width: 767px)': {
  //   image: {
  //     maxWidth: '55vh'
  //   }
  // },
  // '@media (min-width: 768px)': {
  //   image: {
  //     maxWidth: '80vh'
  //   }
  // }
}));

export default useStyles;
