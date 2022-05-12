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
    justifyContent: 'space-evenly',
    marginTop: '3rem'
  },
  webcamContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  rectangle: {
    width: '200px',
    height: '330px',
    position: 'absolute',
    top: '44%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  },
  centralContainer: {
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
  }
}));
export default useStyles;
