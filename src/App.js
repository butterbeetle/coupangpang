import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinForm from "./Components/Auth/JoinForm";
import LoginForm from "./Components/Auth/LoginForm";
import CartView from "./Components/Cart/CartView";
import Main from "./pages/Main";
import Products from "./pages/Products";
import { getCartData, sendCartData } from "./store/cart-action";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";
import { useEffect, useState } from "react";

let isInitial = true;

function App() {
  const [url, setUrl] = useState("");
  const path = ref(storage, "images/2.jpg");

  useEffect(() => {
    const test = async () => {
      const reponse = await getDownloadURL(path);
      setUrl(reponse);
    };
    test();
  }, [path]);

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
      <img src={url} alt="" style={{ width: "2rem", height: "2rem" }}></img>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/join" element={<JoinForm />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
