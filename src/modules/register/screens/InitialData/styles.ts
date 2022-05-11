import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  centralText: {
    ...theme.typography.subtitle1,
    fontWeight: 500,
    fontSize: '1.2rem',
    textAlign: 'center',
    border: '1px solid black'
  },
  identificationIcon: {
    color: theme.palette.info.main,
    marginRight: '9px'
  },
  inputIcon: {
    color: theme.palette.info.main
  },
  checkboxContainer: {
    padding: '15px 17px'
  },
  checkboxLabelUnchecked: {
    color: theme.palette.info.main
  },
  checkboxLabelChecked: {
    color: theme.palette.text.primary
  },
  arrowIcon: {
    color: theme.palette.background.default
  }
}));

export default useStyles;
