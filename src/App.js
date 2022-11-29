import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinForm from "./Components/Auth/JoinForm";
import LoginForm from "./Components/Auth/LoginForm";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/join" element={<JoinForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
