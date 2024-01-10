import { Suspense } from 'react';
import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootPage from './pages/RootPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Text from './UI/Text';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import CategoryListPage from './pages/CategoryListPage';
import ProductListPage from './pages/ProductListPage';
import ProductItemPage from './pages/ProductItemPage';
import NotFoundPagePage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index element={<MainPage />} />
      <Route path="basket" element={<BasketPage />} />
      <Route path="categories" element={<CategoryListPage />} />
      <Route path="categories/:id" element={<ProductListPage />} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="sales" element={<ProductListPage />} />
      <Route path="products/:id" element={<ProductItemPage />} />
      <Route path="*" element={<NotFoundPagePage />} />
    </Route>
  )
);

const App = () => {
  return (
    <Suspense fallbac={<Text text="Loading...🌀" color="gray" type="h1" />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}

export default App;


// export const BASE_URL = 'http://localhost:3333'
export const BASE_URL = 'https://backend-garden.onrender.com';

export const countDiscountPercent = (price, discont_price) => Math.round((price - discont_price) / price * 100);