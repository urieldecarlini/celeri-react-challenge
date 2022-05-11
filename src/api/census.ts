import axios, { AxiosResponse } from 'axios';
import { CENSUS_PATH } from '../config';

axios.defaults.headers.common[
  'Authorization'
] = `Apikey ${process.env.REACT_APP_CENSUS_API_KEY}`;

const getCuitByDNI = async (dni: string): Promise<AxiosResponse> => {
  return await axios.get(
    `${CENSUS_PATH}/getIdPersonaListByDocumento?documento=${dni}`
  );
};

const getPersonalInformationByCuit = async (
  cuit: string
): Promise<AxiosResponse> => {
  return await axios.get(`${CENSUS_PATH}/getPersona?idPersona=${cuit}`);
};

export { getCuitByDNI, getPersonalInformationByCuit };
