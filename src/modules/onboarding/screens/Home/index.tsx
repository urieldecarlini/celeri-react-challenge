import { Button, Container } from '@material-ui/core';
import { useTranslator } from '../../../../hooks/useTranslator';
import useStyles from './styles';

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Button className={classes.button} variant="contained">
        {useTranslator('tid_start')}
      </Button>
    </Container>
  );
};
export default HomeScreen;
