import MainPage from './pages/MainPage';
import ErrorPage from './ErrorPage';
import GamePage from './pages/GamePage';
const routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/game/:gameName',
    element: <GamePage />,
  },
];
export default routes;
