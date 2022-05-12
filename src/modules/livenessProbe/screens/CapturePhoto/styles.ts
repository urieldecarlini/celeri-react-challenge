import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    color: theme.palette.background.default
  },
  image: {},
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem'
  },
  buttonRetake: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.text.primary,
    textTransform: 'none',
    fontSize: '1.2rem'
  },
  buttonCaptureContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1rem',
    paddingBottom: '6rem',
    backgroundColor: 'black'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  webcamContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  rectangle: {
    width: '200px',
    height: '300px',
    position: 'absolute',
    top: '44%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    border: '2px solid white'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3rem',
    marginBottom: '3rem'
  }
}));
export default useStyles;
