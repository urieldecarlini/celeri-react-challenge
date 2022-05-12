import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    padding: '10px',
    alignItems: 'center'
  },
  arrowIcon: {
    color: theme.palette.background.default
  },
  personIcon: {
    color: theme.palette.primary.main
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem'
  },
  inputContainer: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
}));
export default useStyles;
