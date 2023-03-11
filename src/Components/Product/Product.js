import styles from "./Product.module.css";
import ProductMain from "./Main/ProductMain";
import ProductTab from "./Tab/ProductTab";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage, firestore } from "../../firebase-config";
import Loading from "../Util/Loading";
const Product = () => {
  const { productId } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [url, setUrl] = useState([]);
  const listRef = ref(storage, `/product/food/${productId}/thumbnail`);

  useEffect(() => {
    const getData = async () => {
      const res = await listAll(listRef);
      res.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(ref(storage, itemRef));
        // setUrl((prev) => [...prev, url]);
      });
    };

    getData().catch((e) => {
      console.log("Error:", e);
    });
  }, [listRef]);

  console.log(url);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(doc(firestore, "product", productId));
      if (docSnap.exists()) {
        setItem({
          id: docSnap.data().id,
          title: docSnap.data().title,
          price: docSnap.data().price,
          discount: docSnap.data().discount,
          review: docSnap.data().review,
          maxQuantity: docSnap.data().maxQuantity,
        });
      }
      setIsLoading(false);
    };
    getData().catch((e) => {
      console.log("Error:", e);
    });
  }, [productId]);

  // console.log(item);
  return (
    <section className={styles["product"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles["main"]}>
          <ProductMain item={item} />
          <div>{/* 함께 비교하면 좋을 상품 */}</div>
          <ProductTab />
        </div>
      )}
    </section>
  );
};

export default Product;
