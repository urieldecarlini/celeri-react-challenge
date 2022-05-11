import HomeScreen from '../modules/onboarding/screens/Home';
import AboutScreen from '../modules/onboarding/screens/About';
import PageNotFound from '../modules/handlerError/screens/PageNotFound';
import InitialData from '../modules/register/screens/InitialData';
import PersonalData from '../modules/register/screens/PersonalData';
import PersonalAddress from '../modules/register/screens/PersonalAddress';
import LegalInformation from '../modules/register/screens/Legal';
import BankData from '../modules/register/screens/BankData';
import SendingData from '../modules/register/screens/SendingData';
import MakeProbeDNI from '../modules/livenessProbe/screens/MakeProbeDNI';

export interface IRoute {
  auth?: boolean;
  element: JSX.Element;
  exact: boolean;
  path: string;
}

export const routes: IRoute[] = [
  {
    path: '/',
    element: <HomeScreen />,
    exact: true
  },
  {
    path: '*',
    element: <PageNotFound />,
    exact: false
  },
  {
    path: '/about',
    element: <AboutScreen />,
    exact: true
  },
  {
    path: '/initial-data',
    element: <InitialData />,
    exact: true
  },
  {
    path: '/personal-information',
    element: <PersonalData />,
    exact: true
  },
  {
    path: '/personal-address',
    element: <PersonalAddress />,
    exact: true
  },
  {
    path: '/legal-information',
    element: <LegalInformation />,
    exact: true
  },
  {
    path: '/bank-data',
    element: <BankData />,
    exact: true
  },
  {
    path: '/sending-data',
    element: <SendingData />,
    exact: true
  },
  {
    path: '/proof-of-identity',
    element: <MakeProbeDNI />,
    exact: true
  }
];
