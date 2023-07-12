import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
