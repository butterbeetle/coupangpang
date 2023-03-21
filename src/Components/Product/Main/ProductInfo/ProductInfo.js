import styles from "./ProductInfo.module.css";

/* Icon */
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductDelivary from "./ProductDelivary";
import ProductSeller from "./ProductSeller";
import ProductDelivaryCompany from "./ProductDelivaryCompany";
import ProductCash from "./ProductCash";
import ProductBuy from "./ProductBuy";
import ProductDesc from "./ProductDesc";
import ProductInquiry from "./ProductInquiry";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { recentViewSliceActions } from "../../../../store/recentView-slice";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.prod.id);
  const title = useSelector((state) => state.prod.title);
  const price = useSelector((state) => state.prod.price);
  const url = useSelector((state) => state.prod.thumbnailUrl[0]);
  const isLogged = useSelector((state) => state.logged.isLogged);

  useEffect(() => {
    if (isLogged) {
      dispatch(
        recentViewSliceActions.addItemToRecentView({
          id,
          title,
          price,
          url,
        })
      );
    }
  }, [dispatch, id, title, price, url, isLogged]);

  return (
    <div className={styles["product__info"]}>
      <ProductHeader />
      <ProductPrice />
      <ProductDelivary />
      <ProductSeller />
      <ProductDelivaryCompany />
      <ProductCash />
      <ProductBuy />
      <ProductDesc />
      <ProductInquiry />
    </div>
  );
};

export default ProductInfo;
