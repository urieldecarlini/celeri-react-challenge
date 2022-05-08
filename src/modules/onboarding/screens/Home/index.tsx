import { Button, Container } from '@material-ui/core';
import useStyles from './styles';

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Button className={classes.button} variant="contained">
        Go to About
      </Button>
    </Container>
  );
};
export default HomeScreen;
