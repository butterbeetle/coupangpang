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
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

import { useEffect, useState } from "react";

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
  // const [url, setUrl] = useState("");
  // const path = ref(storage, "1.jpg");

  // useEffect(() => {
  //   const test = async () => {
  //     const reponse = await getDownloadURL(path);
  //     setUrl(reponse);
  //   };
  //   test();
  // }, [path]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLogged = useSelector((state) => state.logged.isLogged);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch, isLogged]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // console.log(cart);

  return (
    <>
      {/* <img src={url} alt="" style={{ width: "2rem", height: "2rem" }}></img> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
