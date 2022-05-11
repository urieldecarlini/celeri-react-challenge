import { useTranslator } from '../../../../hooks/useTranslator';
import useStyles from './styles';
import logo from '../../../../assets/images/celeri-logo-black.png';
import { Container, MainBlock } from '../../../../styles/model';
import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../../../components/SubmitButton';

const HomeScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container className="container">
      <MainBlock className="content">
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.image} />
        </div>
        <div className={classes.centralContainer}>
          <Typography className={classes.centralText}>
            {useTranslator('tid_open_account')}
          </Typography>
        </div>
      </MainBlock>
      <SubmitButton
        buttonText={useTranslator('tid_start')}
        onClick={() => navigate('/initial-data')}
      />
    </Container>
  );
};
export default HomeScreen;
