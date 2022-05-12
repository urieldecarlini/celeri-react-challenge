import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    justifyContent: 'center',
    width: '80%',
    top: '55%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  centralText: {
    ...theme.typography.h5,
    fontWeight: 500,
    fontSize: '1.6rem',
    textAlign: 'center'
  },
  centralTextRed: {
    ...theme.typography.h5,
    fontWeight: 500,
    fontSize: '1.6rem',
    textAlign: 'center',
    color: theme.palette.error.main
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem',
    width: '170px'
  }
}));
export default useStyles;
