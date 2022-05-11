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
  homeIcon: {
    color: theme.palette.primary.main
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem'
  }
}));
export default useStyles;
