/* Router */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Page */
import Home from "./pages/HomePage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import PaymentPage from "./pages/PaymentPage";

import LoginForm from "./Components/Auth/LoginForm";
import JoinForm from "./Components/Auth/JoinForm";
import CartView from "./Components/Cart/CartView";
/* Popup */
import AddAddrData from "./Components/Payment/Popup/add/AddAddrData";
import ShowAddrData from "./Components/Payment/Popup/show/showAddrData";
import SelectNormalReq from "./Components/Payment/Popup/normal/SelectNormalReq";
import SelectDawnReq from "./Components/Payment/Popup/dawn/SelectDawnReq";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { loggedActions } from "./store/login-slice";
import {
  getRecentViewData,
  sendRecentViewData,
} from "./store/recentView-action";

/* firebase */
import { getCartData, sendCartData } from "./store/cart-action";

/* Hook */
import { lazy, useEffect, useLayoutEffect } from "react";

/* IndexedDB */
import { getIndexedDbData } from "./Util/IndexedDB";
// import { useUnload } from "./hooks/useUnload";
import { getUserData } from "./store/login-action";
import { getAddrData } from "./store/address-action";
import OrderComplete from "./Components/Payment/complete/Complete";

// const lazyLoadRoutes = (componentName) => {
//   const LazyElement = lazy(() => import(`./pages/Root`));

//   // Wrapping around the suspense component is mandatory
//   return (
//     <Suspense fallback="Loading...">
//       <LazyElement />
//     </Suspense>
//   );
// };

const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/order/complete/:orderId",
        element: <OrderComplete />,
      },
    ],
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/join", element: <JoinForm /> },
  { path: "/cart", element: <CartView /> },
  { path: "/payment", element: <PaymentPage /> },
  {
    path: "/addressbook",
    children: [
      {
        path: "add",
        element: <AddAddrData />,
        children: [
          {
            path: ":addrId",
            element: <AddAddrData />,
          },
        ],
      },
      { path: "show", element: <ShowAddrData /> },
      { path: "normal", element: <SelectNormalReq /> },
      { path: "dawn", element: <SelectDawnReq /> },
    ],
  },
]);

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  /* 장바구니 데이터 */
  const cart = useSelector((state) => state.cart);
  /* 최근 본 상품 데이터 */
  const recentView = useSelector((state) => state.recentView);
  const isLogged = useSelector((state) => state.logged.isLogged);

  /* 창 종료 시 indexedDB data 삭제 */
  // useUnload((e) => {
  //   e.preventDefault();
  //   /* popup 문제 */
  //   // @TODO window.onbeforeunload 찾아보기
  //   // dispatch(loggedActions.logout());
  // });

  /* login 확인 */
  useLayoutEffect(() => {
    getIndexedDbData().then((e) => {
      if (e) {
        dispatch(loggedActions.login());
      }
    });
  }, [dispatch]);

  /* firebase에서 장바구니, 최근 본 상품 얻어오기 */
  useEffect(() => {
    if (isLogged) {
      dispatch(getAddrData());
      dispatch(getUserData());
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

    if (recentView.changed && isLogged) {
      dispatch(sendRecentViewData(recentView.items));
    }
  }, [cart, recentView, dispatch, isLogged]);

  /* 최근 본 상품 넣기 */
  // useEffect(() => {
  //   if (recentView.changed && isLogged) {
  //     dispatch(sendRecentViewData(recentView.items));
  //   }
  // }, [recentView, dispatch, isLogged]);

  return <RouterProvider router={router} />;
}

export default App;
