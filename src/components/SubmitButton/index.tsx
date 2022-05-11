import useStyles from './styles';
import { Button, SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';
import { Footer } from '../../styles/model';

interface ISubmitButtonProps {
  buttonText: string;
  onClick: any;
  icon?: ReactElement<SvgIconProps>;
  disabled?: boolean;
}

const SubmitButton = (props: ISubmitButtonProps) => {
  const { buttonText, onClick, icon, disabled } = props;
  const classes = useStyles();
  return (
    <Footer className="footer">
      {icon ? (
        <Button
          onClick={onClick}
          className={classes.button}
          variant="contained"
          startIcon={icon}
          disabled={disabled}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          className={classes.button}
          variant="contained"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </Footer>
  );
};

export default SubmitButton;
