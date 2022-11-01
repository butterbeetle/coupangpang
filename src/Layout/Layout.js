import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main style={{ backgroundColor: "white" }}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
