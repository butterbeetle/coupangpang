import { Fragment } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
