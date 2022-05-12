import HeaderImage from '../../../../components/HeaderImage';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import useStyles from './styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation, useNavigate } from 'react-router-dom';
import InputFieldForm from '../../../../components/InputFieldForm';
import { ChangeEvent, useEffect, useState } from 'react';
import { genderTypesList } from '../../../../utils/constants/genderType';
import BoyIcon from '@mui/icons-material/Boy';
import { getPersonalInformationByCuit } from '../../../../api/census';
import SelectFieldForm from '../../../../components/SelectFieldForm';
import { Button, SelectChangeEvent, Typography } from '@mui/material';
import { countriesList } from '../../../../utils/constants/countries';
import getParsedDate from '../../../../utils/getParsedDate';
import { IPersonAddressFromAFIP } from '../PersonalAddress';

interface IPersonalDataParamState {
  cuit: string;
}

export interface IApiPersonInformation {
  firstName: string;
  middleName: string;
  lastName: string;
  cuit: number;
  gender: string;
  nationality: string;
  birthCountry: string;
  birthDate: string;
  address: IPersonAddressFromAFIP[];
}

const initialApiPersonalInformation = {
  firstName: '',
  middleName: '',
  lastName: '',
  cuit: 0,
  gender: '',
  nationality: '',
  birthCountry: '',
  birthDate: '',
  address: []
} as IApiPersonInformation;

const PersonalData = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const [apiPersonInformation, setApiPersonInformation] =
    useState<IApiPersonInformation>(initialApiPersonalInformation);
  const [disabledForm, setDisabledForm] = useState(true);
  const [disabledButton, setDisabledButton] = useState(true);

  const { state } = location;
  const paramState = state as IPersonalDataParamState;

  useEffect(() => {
    getPersonalInformation();
  }, [paramState.cuit]);

  useEffect(() => {
    const isValidForm = validateForm();
    setDisabledButton(!isValidForm);
  }, [apiPersonInformation]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setApiPersonInformation({
      ...apiPersonInformation,
      [event.target.name]: event.target.value
    });
  };

  //TODO: unify both handlers
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setApiPersonInformation({
      ...apiPersonInformation,
      [event.target.name]: event.target.value
    });
  };

  const getPersonalInformation = async () => {
    //TODO: move to presenter
    try {
      const response = await getPersonalInformationByCuit(paramState.cuit);
      if (response.status === 200) {
        const person = response.data.persona;
        const personaParsed: IApiPersonInformation = {
          ...apiPersonInformation,
          firstName: person.nombre,
          lastName: person.apellido,
          cuit: person.idPersona,
          nationality: 'ARGENTINA',
          birthDate: getParsedDate(new Date(person.fechaNacimiento)),
          address: person.domicilio
        };
        setApiPersonInformation(personaParsed);
      }
    } catch (error) {
      alert(useTranslator('tid_error_personal_information'));
      alert(error);
    }
  };

  const validateForm = () => {
    //TODO: improve validation
    if (
      apiPersonInformation.firstName !== '' &&
      apiPersonInformation.lastName !== '' &&
      apiPersonInformation.cuit !== 0 &&
      apiPersonInformation.address.length > 0
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
          <BoyIcon className={classes.personIcon} />
          <Typography variant="h5">
            {useTranslator('tid_personal_data')}
          </Typography>
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_first_name')}
            name="firstName"
            hasLabel={true}
            value={apiPersonInformation?.firstName}
            onChange={handleChangeInput}
            disabled={true}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_middle_name')}
            hasLabel={true}
            name="middleName"
            value={apiPersonInformation?.middleName}
            onChange={handleChangeInput}
            disabled={disabledForm}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_last_name')}
            hasLabel={true}
            name="lastName"
            value={apiPersonInformation?.lastName}
            onChange={handleChangeInput}
            disabled={true}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_cuit')}
            hasLabel={true}
            name="cuit"
            value={apiPersonInformation?.cuit}
            onChange={handleChangeInput}
            disabled={true}
          />
        </div>
        <div className={classes.inputContainer}>
          <SelectFieldForm
            value={apiPersonInformation.gender}
            placeholder={useTranslator('tid_gender')}
            name="gender"
            onChange={handleChangeSelect}
            values={genderTypesList}
            disabled={disabledForm}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_nationality')}
            hasLabel={true}
            name="nationality"
            value={apiPersonInformation.nationality}
            onChange={handleChangeInput}
            disabled={true}
          />
        </div>
        <div className={classes.inputContainer}>
          <SelectFieldForm
            value={apiPersonInformation.birthCountry}
            placeholder={useTranslator('tid_birth_country')}
            name="birthCountry"
            onChange={handleChangeSelect}
            values={countriesList}
            disabled={disabledForm}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_birth_date')}
            hasLabel={true}
            name="birthDate"
            value={apiPersonInformation.birthDate}
            onChange={handleChangeInput}
            disabled={disabledForm}
          />
        </div>
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
        onClick={() => {
          navigate('/personal-address', {
            state: { personInformation: apiPersonInformation }
          });
        }}
        icon={<ArrowForwardIcon className={classes.arrowIcon} />}
        disabled={disabledButton}
      />
    </Container>
  );
};
export default PersonalData;
