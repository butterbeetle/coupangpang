import styles from "./ProductInfo.module.css";

/* Icon */
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductDelivery from "./ProductDelivery";
import ProductSeller from "./ProductSeller";
import ProductDeliveryCompany from "./ProductDeliveryCompany";
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
  const { id, title, price, seller, delivery_service } = useSelector(
    (state) => state.prod
  );
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

  console.log(seller);
  return (
    <div className={styles["product__info"]}>
      <ProductHeader />
      <ProductPrice />
      <ProductDelivery />
      {seller && <ProductSeller />}
      {delivery_service && <ProductDeliveryCompany />}
      <ProductCash />
      <ProductBuy />
      <ProductDesc />
      <ProductInquiry />
    </div>
  );
};

export default ProductInfo;
