import { SelectChangeEvent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HeaderImage from '../../../../components/HeaderImage';
import SubmitButton from '../../../../components/SubmitButton';
import { useTranslator } from '../../../../hooks/useTranslator';
import { Container, MainBlock } from '../../../../styles/model';
import useStyles from './styles';
import InputFieldForm from '../../../../components/InputFieldForm';
import { ChangeEvent, useState } from 'react';
import SelectFieldForm from '../../../../components/SelectFieldForm';
import { accountsTypeList } from '../../../../utils/constants/accountsType';
import { currenciesList } from '../../../../utils/constants/currencies';

const BankData = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bankData, setBankData] = useState({
    bankName: '',
    bankAccount: '',
    bankCBU: '',
    bankCurrency: ''
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setBankData({
      ...bankData,
      [event.target.name]: event.target.value
    });
  };

  //TODO: unify both handlers
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setBankData({
      ...bankData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container className="container">
      <HeaderImage />
      <MainBlock className="content">
        <Typography variant="h5" className="title">
          {useTranslator('tid_bank_data_title')}
        </Typography>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_cbu')}
            name="bankCBU"
            value={bankData.bankCBU}
            onChange={handleChangeInput}
            icon={<AccountBalanceIcon className={classes.inputIcon} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <SelectFieldForm
            value={bankData.bankAccount}
            placeholder={useTranslator('tid_bank_account_type')}
            name="bankAccount"
            onChange={handleChangeSelect}
            values={accountsTypeList}
            icon={<AccountBalanceWalletIcon className={classes.selectIcon} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <SelectFieldForm
            value={bankData.bankCurrency}
            placeholder={useTranslator('tid_currency')}
            name="bankCurrency"
            onChange={handleChangeSelect}
            values={currenciesList}
            icon={<AttachMoneyIcon className={classes.selectIcon} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <InputFieldForm
            placeholder={useTranslator('tid_bank_entity')}
            name="bankName"
            hasLabel={true}
            value={bankData.bankName}
            onChange={handleChangeInput}
          />
        </div>
      </MainBlock>
      <SubmitButton
        buttonText={useTranslator('tid_next_step')}
        onClick={() => navigate('/sending-data')}
        icon={<ArrowForwardIcon className={classes.arrowIcon} />}
        // disabled={disabledButton}
      />
    </Container>
  );
};
export default BankData;
