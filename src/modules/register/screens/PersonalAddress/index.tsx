import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderImage from '../../../../components/HeaderImage';
import InputFieldForm from '../../../../components/InputFieldForm';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import { IApiPersonInformation } from '../PersonalData';
import useStyles from './styles';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IPersonalAddressParamState {
  personInformation: IApiPersonInformation;
}

export interface IPersonAddressFromAFIP {
  descripcionProvincia: string;
  localidad: string;
  direccion: string;
  numero: string;
  oficinaDptoLocal: string;
  codigoPostal: string;
}

interface IPersonAddress {
  country: string;
  state: string;
  city: string;
  street: string;
  addressNumber: string;
  apartment: string;
  postalCode: string;
}

const initialPersonAddress = {
  country: '',
  state: '',
  city: '',
  street: '',
  addressNumber: '',
  apartment: '',
  postalCode: ''
} as IPersonAddress;

const PersonalAddress = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const paramState = state as IPersonalAddressParamState;
  const { personInformation } = paramState;
  const [personAddress, setPersonAddress] = useState(initialPersonAddress);
  const [disabledForm, setDisabledForm] = useState(true);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (personInformation && personInformation.address.length) {
      const addressFormatted = {
        country: personInformation.nationality,
        state: personInformation.address[0].descripcionProvincia,
        city: personInformation.address[0].localidad,
        street: personInformation.address[0].direccion,
        addressNumber: personInformation.address[0].numero,
        apartment: personInformation.address[0].oficinaDptoLocal || '',
        postalCode: personInformation.address[0].codigoPostal
      } as IPersonAddress;
      setPersonAddress(addressFormatted);
    }
  }, [personInformation]);

  useEffect(() => {
    const isValidForm = validateForm();
    setDisabledButton(!isValidForm);
  }, [personAddress]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonAddress({
      ...personAddress,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    //TODO: improve validation
    if (
      personAddress.country !== '' &&
      personAddress.state !== '' &&
      personAddress.city !== '' &&
      personAddress.street !== '' &&
      personAddress.addressNumber !== '' &&
      personAddress.postalCode !== ''
    ) {
      return true;
    }
    return false;
  };

  return (
    <Container className="container">
      <HeaderImage />
      <MainBlock className="content">
        <div className={classes.titleContainer}>
          <HomeIcon className={classes.homeIcon} />
          <Typography variant="h5">
            {useTranslator('tid_personal_address')}
          </Typography>
        </div>
        <InputFieldForm
          placeholder={useTranslator('tid_country')}
          name="country"
          hasLabel={true}
          value={personAddress?.country}
          onChange={handleChangeInput}
          disabled={true}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_state')}
          hasLabel={true}
          name="state"
          value={personAddress?.state}
          onChange={handleChangeInput}
          disabled={true}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_city')}
          hasLabel={true}
          name="city"
          value={personAddress?.city}
          onChange={handleChangeInput}
          disabled={disabledForm}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_street')}
          hasLabel={true}
          name="street"
          value={personAddress?.street}
          onChange={handleChangeInput}
          disabled={disabledForm}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_address_number')}
          hasLabel={true}
          name="addressNumber"
          value={personAddress?.addressNumber}
          onChange={handleChangeInput}
          disabled={disabledForm}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_apartment')}
          hasLabel={true}
          name="apartment"
          value={personAddress?.apartment}
          onChange={handleChangeInput}
          disabled={disabledForm}
        />
        <InputFieldForm
          placeholder={useTranslator('tid_postal_code')}
          hasLabel={true}
          name="postalCode"
          value={personAddress?.postalCode}
          onChange={handleChangeInput}
          disabled={disabledForm}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px'
          }}
        >
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => setDisabledForm(!disabledForm)}
          >
            {disabledForm
              ? useTranslator('tid_edit_form')
              : useTranslator('tid_block_form')}
          </Button>
        </div>
      </MainBlock>
      <SubmitButton
        buttonText={useTranslator('tid_next_step')}
        onClick={() => navigate('/legal-information')}
        icon={<ArrowForwardIcon className={classes.arrowIcon} />}
        disabled={disabledButton}
      />
    </Container>
  );
};
export default PersonalAddress;
