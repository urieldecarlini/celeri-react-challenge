import axios, { AxiosResponse } from 'axios';
import { FILE_HANDLER_PATH } from '../config';

const submitFileToServer = async (
  formData: FormData
): Promise<AxiosResponse> => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
  };
  return await axios.post(`${FILE_HANDLER_PATH}/upload`, formData, config);
};
export { submitFileToServer };
