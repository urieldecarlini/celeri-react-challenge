import { ChangeEvent, useEffect, useState } from 'react';
import { Container, MainBlock } from '../../../../styles/model';
import useStyles from './styles';
import { useTranslator } from '../../../../hooks/useTranslator';
import HeaderImage from '../../../../components/HeaderImage';
import SubmitButton from '../../../../components/SubmitButton';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BadgeIcon from '@mui/icons-material/Badge';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  SelectChangeEvent
} from '@mui/material';
import InputFieldForm from '../../../../components/InputFieldForm';
import SelectFieldForm from '../../../../components/SelectFieldForm';
import IDENTIFICATION_TYPE from '../../../../utils/constants/identificationType';
import { useNavigate } from 'react-router-dom';
import { getCuitByDNI } from '../../../../api/census';

const InitialData = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [personalInformation, setPersonalInformation] = useState({
    phoneNumber: '',
    email: '',
    identificationType: '',
    identificationNumber: '',
    terms: false
  });
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const localData = JSON.parse(
      localStorage.getItem('informationStep') as string
    );
    if (localData) {
      setPersonalInformation(localData.data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'informationStep',
      JSON.stringify({
        data: personalInformation,
        step: 'initial-data' //TODO: same strategy in all views, modal navigate to this route saved in localStorage
      })
    );
    const isValidForm = validateForm();
    setDisabledButton(!isValidForm);
  }, [personalInformation]);

  const handleChange = (event: SelectChangeEvent) => {
    setPersonalInformation({
      ...personalInformation,
      [event.target.name]: event.target.value
    });
  };

  //TODO: unify both handlers
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalInformation({
      ...personalInformation,
      [event.target.name]:
        event.target.name === 'terms'
          ? event.target.checked
          : event.target.value
    });
  };

  const getPersonCuit = async () => {
    //TODO: move to presenter
    setDisabledButton(true);
    //TODO: add loading
    try {
      const response = await getCuitByDNI(
        personalInformation.identificationNumber
      );
      if (response.status === 200) {
        const cuit = response.data.idPersona[0];
        navigate('/personal-information', { state: { cuit: cuit } });
      }
    } catch (error) {
      alert(useTranslator('tid_error_cuit'));
      alert(error);
    }
  };

  const validateForm = () => {
    //TODO: improve validation
    if (
      personalInformation.phoneNumber !== '' &&
      personalInformation.email !== '' &&
      personalInformation.identificationType !== '' &&
      personalInformation.identificationNumber !== '' &&
      personalInformation.terms
    ) {
      return true;
    }
    return false;
  };

  return (
    <Container className="container">
      <HeaderImage />
      <MainBlock className="content">
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_phone')}
            name="phoneNumber"
            value={personalInformation.phoneNumber}
            onChange={handleChangeInput}
            icon={<SmartphoneIcon className={classes.inputIcon} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_email')}
            name="email"
            value={personalInformation.email}
            onChange={handleChangeInput}
            icon={<EmailIcon className={classes.inputIcon} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <SelectFieldForm
            value={personalInformation.identificationType}
            icon={<BadgeIcon className={classes.identificationIcon} />}
            placeholder={useTranslator('tid_identification_type')}
            name="identificationType"
            onChange={handleChange}
            values={IDENTIFICATION_TYPE}
          />
        </div>
        {/* TODO: add mask for identification number */}
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_identification_number')}
            onChange={handleChangeInput}
            name="identificationNumber"
            value={personalInformation.identificationNumber}
            icon={<BadgeIcon className={classes.inputIcon} />}
          />
        </div>
        <FormGroup className={classes.checkboxContainer}>
          <FormControlLabel
            control={
              <Checkbox
                name="terms"
                onChange={handleChangeInput}
                checked={personalInformation.terms}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={useTranslator('tid_accept_terms')}
            className={
              personalInformation.terms
                ? classes.checkboxLabelChecked
                : classes.checkboxLabelUnchecked
            }
          />
        </FormGroup>
      </MainBlock>
      <SubmitButton
        buttonText={useTranslator('tid_next_step')}
        onClick={() => getPersonCuit()}
        icon={<ArrowForwardIcon className={classes.arrowIcon} />}
        disabled={disabledButton}
      />
    </Container>
  );
};
export default InitialData;
