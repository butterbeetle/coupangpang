import { productActions } from "./product-slice";

/* firebase */
import { doc, getDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase-config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export const getProductData = (productId) => {
  return async (dispatch) => {
    const getData = async () => {
      const docSnap = await getDoc(doc(firestore, "product", productId));
      if (docSnap.exists()) {
        dispatch(
          productActions.addProduct({
            id: docSnap.data().id,
            title: docSnap.data().title,
            price: docSnap.data().price,
            discount: docSnap.data().discount,
            review: docSnap.data().review,
            maxQuantity: docSnap.data().maxQuantity,
          })
        );
      }
    };
    try {
      await getData();
    } catch (e) {
      console.log(e);
    }
  };
};

export const getThumbnailUrl = (productId) => {
  return async (dispatch) => {
    const getData = async () => {
      dispatch(productActions.resetUrl());
      const thumbnailRef = ref(storage, `/product/${productId}/thumbnail`);
      const res = await listAll(thumbnailRef);
      res.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(ref(storage, itemRef));
        dispatch(productActions.addThumbnailUrl({ url }));
      });
    };
    try {
      await getData();
    } catch (e) {
      // console.log(e);
    }
  };
};

export const getDetailUrl = (productId) => {
  return async (dispatch) => {
    const getData = async () => {
      dispatch(productActions.resetUrl());
      const detailRef = ref(storage, `/product/${productId}/detail`);
      const res = await listAll(detailRef);

      res.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(ref(storage, itemRef));
        dispatch(productActions.addDetailUrl({ url }));
      });
    };
    try {
      await getData();
    } catch (e) {
      // console.log(e);
    }
  };
};
