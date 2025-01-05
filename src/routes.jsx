import MainPage from './pages/MainPage';
import ErrorPage from './ErrorPage';
import GamePage from './pages/GamePage';
import CategoryPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import { element } from 'prop-types';
const routes = [
  {
    path: '/Game-Store',
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
  {
    path: '/cart',
    element: <CartPage />,
  },
];
export default routes;
