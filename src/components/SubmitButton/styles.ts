import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    textTransform: 'none',
    fontSize: '1.2rem'
  }
}));

export default useStyles;
