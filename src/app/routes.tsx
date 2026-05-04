import { createBrowserRouter } from 'react-router';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Success from './screens/Success';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/product/:id',
    Component: ProductDetails,
  },
  {
    path: '/cart',
    Component: Cart,
  },
  {
    path: '/checkout',
    Component: Checkout,
  },
  {
    path: '/success',
    Component: Success,
  },
]);
