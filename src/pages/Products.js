import { useParams } from "react-router";
import Product from "../Components/Details/Product";
import Layout from "../Layout/Layout";

const Detail = () => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};
export default Detail;
