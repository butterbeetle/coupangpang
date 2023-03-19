import styles from "./ProductInfo.module.css";

/* redux */
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductDelivary from "./ProductDelivary";
import ProductSeller from "./ProductSeller";
import ProductDelivaryCompany from "./ProductDelivaryCompany";
import ProductCash from "./ProductCash";
import ProductBuy from "./ProductBuy";
import ProductDesc from "./ProductDesc";
import ProductInquiry from "./ProductInquiry";

const ProductInfo = () => {
  // const isLogged = useSelector((state) => state.logged.isLogged);

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
