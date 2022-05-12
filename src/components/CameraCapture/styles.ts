import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    color: theme.palette.background.default
  },
  image: {
    marginTop: '30px'
  },
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '3rem'
  },
  imageContainer: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
}));
export default useStyles;
