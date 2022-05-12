import HomeScreen from '../modules/onboarding/screens/Home';
import AboutScreen from '../modules/onboarding/screens/About';
import PageNotFound from '../modules/handlerError/screens/PageNotFound';
import InitialData from '../modules/register/screens/InitialData';
import PersonalData from '../modules/register/screens/PersonalData';
import PersonalAddress from '../modules/register/screens/PersonalAddress';
import LegalInformation from '../modules/register/screens/Legal';
import BankData from '../modules/register/screens/BankData';
import SendingData from '../modules/register/screens/SendingData';
import MakeProbeFrontDNI from '../modules/livenessProbe/screens/MakeProbeFrontDNI';
import CapturePhoto from '../modules/livenessProbe/screens/CapturePhoto';
import MakeProbeBackDNI from '../modules/livenessProbe/screens/MakeProbeBackDNI';
import MakeProbeSelfie from '../modules/livenessProbe/screens/MakeProbeSelfie';
import CaptureVideo from '../modules/livenessProbe/screens/CaptureVideo';
import SendFiles from '../modules/livenessProbe/screens/SendFiles';

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
    path: '/proof-of-identity-front',
    element: <MakeProbeFrontDNI />,
    exact: true
  },
  {
    path: '/proof-of-identity-back',
    element: <MakeProbeBackDNI />,
    exact: true
  },
  {
    path: '/proof-of-identity-selfie',
    element: <MakeProbeSelfie />,
    exact: true
  },
  {
    path: '/capture-photo',
    element: <CapturePhoto />,
    exact: true
  },
  {
    path: '/capture-video',
    element: <CaptureVideo />,
    exact: true
  },
  {
    path: '/send-files',
    element: <SendFiles />,
    exact: true
  }
];
