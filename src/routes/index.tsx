import HomeScreen from '../modules/onboarding/screens/Home';
import AboutScreen from '../modules/onboarding/screens/About';
import PageNotFound from '../modules/handlerError/screens/PageNotFound';

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
    path: '/about',
    element: <AboutScreen />,
    exact: true
  },
  {
    path: '*',
    element: <PageNotFound />,
    exact: false
  }
];
