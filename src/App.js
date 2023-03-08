import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinForm from "./Components/Auth/JoinForm";
import LoginForm from "./Components/Auth/LoginForm";
import CartView from "./Components/Cart/CartView";
import Main from "./pages/Main";
import Products from "./pages/Products";

// import { ref, getDownloadURL } from "firebase/storage";
// import { firestore, storage } from "./firebase-config";
// import { useEffect, useState } from "react";

function App() {
  // const [url, setUrl] = useState("");
  // const path = ref(storage, "images/2.jpg");

  // useEffect(() => {
  //   const test = async () => {
  //     const reponse = await getDownloadURL(path);
  //     setUrl(reponse);
  //   };
  //   test();
  // }, [path]);

  return (
    <>
      {/* <img src={aSrc} alt=""></img> */}
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
