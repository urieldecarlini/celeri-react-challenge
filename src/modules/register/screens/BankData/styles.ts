import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    color: theme.palette.background.default
  },
  inputIcon: {
    color: theme.palette.info.main
  },
  selectIcon: {
    color: theme.palette.info.main,
    marginRight: '9px'
  },
  inputContainer: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
}));
export default useStyles;
