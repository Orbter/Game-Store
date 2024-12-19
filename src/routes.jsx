import MainPage from './pages/MainPage';
import ErrorPage from './ErrorPage';
import GamePage from './pages/GamePage';
import CategoryPage from './pages/CategoriesPage';
import { element } from 'prop-types';
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
  {
    path: '/categories/:categoriesName',
    element: <CategoryPage />,
  },
];
export default routes;
