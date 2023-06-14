import styles from "./Product.module.css";
import ProductMain from "./Main/ProductMain";
import ProductTab from "./Tab/ProductTab";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  getDetailUrl,
  getProductData,
  getThumbnailUrl,
} from "../../store/product-action";
/* UI */
import LoadingModal from "../../UI/LoadingModal";

const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  /* Product, Thumbnail, Detail Img Data 받아오기 */
  useEffect(() => {
    dispatch(getProductData(productId));
    dispatch(getDetailUrl(productId));
    dispatch(getThumbnailUrl(productId));
  }, [dispatch, productId]);

  /* 첫 접속 시 로딩 */
  useEffect(() => {
    setLoading(true);
  }, []);

  /* 데이터 변경시 마다 로딩 */
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <section className={styles["product"]}>
      {loading && <LoadingModal />}
      <div className={styles["main"]}>
        <ProductMain />
        <ProductTab />
      </div>
    </section>
  );
};

export default Product;
