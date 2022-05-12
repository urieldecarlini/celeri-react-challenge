import { LinearProgress, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/celeri-logo-black.png';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import useStyles from './styles';

const SendingData = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const buttonText = useTranslator('tid_proof_of_identity');

  useEffect(() => {
    setTimeout(() => {
      //send data to server, get from params/localStorage all personal information and post to endpoint
      //setTimeout is used to simulate the time it takes to send data to server and get response
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container className="container">
      <MainBlock className="content">
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.image} />
        </div>
        {loading ? (
          <div className={classes.centralContainer}>
            <Typography variant="h5" className={classes.centralText}>
              {useTranslator('tid_saving_data')}
            </Typography>
            <Stack
              sx={{ width: '100%', color: 'grey.500', marginTop: '50px' }}
              spacing={2}
            >
              <LinearProgress color="primary" />
            </Stack>
          </div>
        ) : (
          <div className={classes.centralContainer}>
            <Typography variant="h5" className={classes.centralText}>
              {useTranslator('tid_data_saved')}
            </Typography>
          </div>
        )}
      </MainBlock>
      {!loading ? (
        <SubmitButton
          buttonText={buttonText}
          onClick={() => navigate('/proof-of-identity-front')}
        />
      ) : null}
    </Container>
  );
};
export default SendingData;
