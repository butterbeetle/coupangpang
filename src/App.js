import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinForm from "./Components/Auth/JoinForm";
import LoginForm from "./Components/Auth/LoginForm";
import Main from "./pages/Main";

import { ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "./firebase-config";
import { useEffect, useState } from "react";

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

  return (
    <>
      {/* <img src={url} alt=""></img> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/join" element={<JoinForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
