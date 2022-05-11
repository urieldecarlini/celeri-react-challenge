import { Header } from '../../styles/model';
import useStyles from './styles';
import logo from '../../assets/images/celeri-logo-black.png';

const HeaderImage = () => {
  const classes = useStyles();
  return (
    <Header className="header">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={logo} className={classes.image} />
      </div>
    </Header>
  );
};
export default HeaderImage;
