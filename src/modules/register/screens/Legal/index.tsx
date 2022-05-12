import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import HeaderImage from '../../../../components/HeaderImage';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

const initialLegalInformation = {
  isSOI: undefined,
  isPEP: undefined,
  isFATCA: undefined,
  isForeignTaxpayer: undefined,
  isFundLegal: undefined
};

const LegalInformation = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [legalInformation, setLegalInformation] = useState(
    initialLegalInformation
  );

  const affirmativePhrase = useTranslator('tid_yes');
  const negativePhrase = useTranslator('tid_no');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setLegalInformation({
      ...legalInformation,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Container className="container">
      <HeaderImage />
      <MainBlock className="content">
        <Typography variant="h5" className="title">
          {useTranslator('tid_legal_conditions')}
        </Typography>
        <FormGroup className={classes.checkboxContainer}>
          <FormControlLabel
            control={
              <Checkbox
                name="isSOI"
                onChange={handleChangeInput}
                checked={legalInformation.isSOI}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={useTranslator('tid_SOI')}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isPEP"
                onChange={handleChangeInput}
                checked={legalInformation.isPEP}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={useTranslator('tid_PEP')}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="isFATCA"
                onChange={handleChangeInput}
                checked={legalInformation.isFATCA}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={useTranslator('tid_FATCA')}
          />
        </FormGroup>
        <Typography variant="h5" className="title">
          {useTranslator('tid_legal_tributes')}
        </Typography>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label-tributes"
          name="isForeignTaxpayer"
          value={legalInformation.isForeignTaxpayer}
          onChange={handleChangeInput}
          className={classes.checkboxContainer}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label={affirmativePhrase}
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label={negativePhrase}
          />
        </RadioGroup>
        <Typography variant="h5" className="title">
          {useTranslator('tid_legal_origin')}
        </Typography>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label-fund-legal"
          name="isFundLegal"
          value={legalInformation.isFundLegal}
          onChange={handleChangeInput}
          className={classes.checkboxContainer}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label={affirmativePhrase}
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label={negativePhrase}
          />
        </RadioGroup>
      </MainBlock>
      <SubmitButton
        buttonText={useTranslator('tid_next_step')}
        onClick={() => navigate('/bank-data')}
        icon={<ArrowForwardIcon className={classes.arrowIcon} />}
      />
    </Container>
  );
};
export default LegalInformation;
