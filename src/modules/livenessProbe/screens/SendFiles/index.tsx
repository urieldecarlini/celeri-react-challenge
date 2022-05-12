import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/celeri-logo-black.png';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import { submitFileToServer } from '../../../../api/fileHandler';
import useStyles from './styles';

interface IDocumentPhoto {
  front: string;
  back: string;
  selfie: string;
}

const initialPersonDocumentFiles: IDocumentPhoto = {
  front: '',
  back: '',
  selfie: ''
};

const SendFiles = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const paramState = state as IDocumentPhoto;
  const [filesUpload, setFilesUpload] = useState<IDocumentPhoto>(
    initialPersonDocumentFiles
  );
  const buttonText = useTranslator('tid_finish_probe');

  useEffect(() => {
    if (paramState) {
      setFilesUpload(paramState);
    }
  }, [paramState]);

  useEffect(() => {
    const onSubmit = () => {
      const formData = new FormData();
      formData.append('front', filesUpload.front);
      formData.append('back', filesUpload.back);
      formData.append('selfie', filesUpload.selfie);
      submitFileToServer(formData).then((response) => {
        if (response.status === 200) {
          console.log('Gaurdado con Exito', response);
        } else {
          console.log('error');
          alert('No existe el servicio para guardar archivos');
        }
      });
    };
    if (
      filesUpload.front !== '' &&
      filesUpload.back !== '' &&
      filesUpload.selfie !== ''
    ) {
      onSubmit();
    }
  }, [filesUpload]);

  return (
    <Container className="container">
      <MainBlock className="content">
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.image} />
        </div>
        <div className={classes.centralContainer}>
          <Typography variant="h5" className={classes.centralText}>
            {useTranslator('tid_data_files_saved')}
          </Typography>
          <Typography variant="h5" className={classes.centralText}>
            {useTranslator('tid_contact_coming_soon')}
          </Typography>
        </div>
      </MainBlock>
      <SubmitButton buttonText={buttonText} onClick={() => navigate('/')} />
    </Container>
  );
};
export default SendFiles;
