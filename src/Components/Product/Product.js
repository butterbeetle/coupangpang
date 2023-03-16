import styles from "./Product.module.css";
import ProductMain from "./Main/ProductMain";
import ProductTab from "./Tab/ProductTab";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../Util/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailUrl,
  getProductData,
  getThumbnailUrl,
} from "../../store/product-action";
import { productActions } from "../../store/product-slice";

let init = true;
const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.prod.isLoading);

  /* Product, Thumbnail, Detail Img Data 받아오기 */
  useEffect(() => {
    if (init) {
      init = false;
      dispatch(productActions.nowLoading());
      dispatch(getProductData(productId));
      dispatch(getDetailUrl(productId));
      dispatch(getThumbnailUrl(productId));
      dispatch(productActions.endLoading());
    }
  }, [dispatch, productId]);

  return (
    <section className={styles["product"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles["main"]}>
          <ProductMain />
          <div>{/* 함께 비교하면 좋을 상품 */}</div>
          <ProductTab />
        </div>
      )}
    </section>
  );
};

export default Product;
