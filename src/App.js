/* Router */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

import LoginForm from "./Components/Auth/LoginForm";
import JoinForm from "./Components/Auth/JoinForm";
import CartView from "./Components/Cart/CartView";

/* redux */
import { useDispatch, useSelector } from "react-redux";

/* firebase */
import { getCartData, sendCartData } from "./store/cart-action";

import { useEffect } from "react";
import {
  getRecentViewData,
  sendRecentViewData,
} from "./store/recentView-action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:productId", element: <ProductDetail /> },
    ],
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/join", element: <JoinForm /> },
  { path: "/cart", element: <CartView /> },
]);

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  /* 장바구니 데이터 */
  const cart = useSelector((state) => state.cart);
  /* 최근 본 상품 데이터 */
  const recentView = useSelector((state) => state.recentView);
  const isLogged = useSelector((state) => state.logged.isLogged);

  /* firebase에서 장바구니, 최근 본 상품 얻어오기 */
  useEffect(() => {
    if (isLogged) {
      dispatch(getCartData());
      dispatch(getRecentViewData());
    }
  }, [dispatch, isLogged]);

  /* 장바구니 넣기 */
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed && isLogged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, recentView, dispatch, isLogged]);

  /* 최근 본 상품 넣기 */
  useEffect(() => {
    if (recentView.changed && isLogged) {
      dispatch(sendRecentViewData(recentView.items));
    }
  }, [recentView, dispatch, isLogged]);

  return <RouterProvider router={router} />;
}

export default App;
