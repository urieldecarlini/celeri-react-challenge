import { ReactElement, useState } from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SvgIconProps
} from '@mui/material';

interface IValueElement {
  name: string;
  value: string;
}

interface ISelectFieldFormProps {
  value: any;
  onChange: (event: SelectChangeEvent) => void;
  values: IValueElement[];
  icon?: ReactElement<SvgIconProps>;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
}
const SelectFieldForm = (props: ISelectFieldFormProps) => {
  const { value, icon, onChange, values, placeholder, name, disabled } = props;
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      fullWidth
      displayEmpty
      name={name}
      disabled={disabled}
      onChange={onChange}
      startAdornment={icon || null}
    >
      {placeholder ? (
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
      ) : null}
      {values.map((element: any, index: number) => (
        <MenuItem key={index} value={element.value}>
          {element.name}
        </MenuItem>
      ))}
    </Select>
  );
};
export default SelectFieldForm;
