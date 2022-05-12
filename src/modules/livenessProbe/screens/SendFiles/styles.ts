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
    // display: 'flex',
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
  }
}));
export default useStyles;
