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
  }
}));
export default useStyles;
