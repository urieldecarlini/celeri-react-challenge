import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/celeri-logo-black.png';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
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

const MakeProbeSelfie = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const paramState = state as IDocumentPhoto;
  const [filesUpload, setFilesUpload] = useState<IDocumentPhoto>(
    initialPersonDocumentFiles
  );

  useEffect(() => {
    if (paramState) {
      setFilesUpload(paramState);
    }
  }, [paramState]);

  return (
    <Container className="container">
      <MainBlock className="content">
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.image} />
        </div>
        <div className={classes.centralContainer}>
          <Typography variant="h5" className={classes.centralText}>
            {useTranslator('tid_upload_selfie_identification')}
          </Typography>
          <Typography variant="h5" className={classes.centralTextRed}>
            {useTranslator('tid_important_note')}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => navigate('/capture-video', { state: filesUpload })}
            >
              {useTranslator('tid_record_video')}
            </Button>
          </div>
        </div>
      </MainBlock>
    </Container>
  );
};
export default MakeProbeSelfie;
