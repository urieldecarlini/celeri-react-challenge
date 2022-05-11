import { ChangeEventHandler, ReactElement } from 'react';
import { InputAdornment, SvgIconProps, TextField } from '@mui/material';
import useStyles from './styles';

interface IInputFieldFormProps {
  placeholder: string;
  icon?: ReactElement<SvgIconProps>;
  onChange: ChangeEventHandler;
  name?: string;
  value?: any;
  disabled?: boolean;
  hasLabel?: boolean;
}

const InputFieldForm = (props: IInputFieldFormProps) => {
  const { placeholder, icon, onChange, name, value, disabled, hasLabel } =
    props;
  const classes = useStyles();
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      fullWidth
      name={name}
      value={value}
      label={hasLabel ? placeholder : null}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : null
      }}
      onChange={onChange}
      variant="outlined"
      disabled={disabled}
    />
  );
};
export default InputFieldForm;
