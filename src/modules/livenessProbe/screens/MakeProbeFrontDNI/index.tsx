import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/celeri-logo-black.png';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import useStyles from './styles';

const MakeProbeFrontDNI = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className="container">
      <MainBlock className="content">
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.image} />
        </div>
        <div className={classes.centralContainer}>
          <Typography variant="h5" className={classes.centralText}>
            {useTranslator('tid_upload_front_identification')}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => navigate('/capture-photo')}
            >
              {useTranslator('tid_take_photo')}
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              disabled={true}
              onClick={() => console.log('LOAD PHOTO')}
            >
              {useTranslator('tid_load_file')}
            </Button>
          </div>
        </div>
      </MainBlock>
    </Container>
  );
};
export default MakeProbeFrontDNI;
