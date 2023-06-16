import { productActions } from "./product-slice";

/* firebase */
import { firestore, storage } from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export const getAllProdData = () => {
  return async (dispatch) => {
    const getAllData = async () => {
      const allDocs = await getDocs(collection(firestore, "product"));
      allDocs.forEach(async (doc) => {
        /* Thumbnail Image */
        const thumbnailRef = ref(storage, `/product/${doc.id}/thumbnail`);
        const thumbnailRes = await listAll(thumbnailRef);
        thumbnailRes.items.forEach(async (itemRef) => {
          const url = await getDownloadURL(ref(storage, itemRef));
          const idx = url.indexOf(".webp");
          const first = url.substring(idx - 2, idx).replace(/[^0-9]/g, "");
          if (first === "1")
            dispatch(productActions.setAllProdData({ id: doc.id, url }));
        });

        dispatch(
          productActions.setAllProdData({ id: doc.id, data: doc.data() })
        );
      });
    };
    try {
      await getAllData();
    } catch (e) {
      // console.log(e);
    }
  };
};

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
            seller: docSnap.data().seller,
            delivery_service: docSnap.data().delivery_service,
            review: docSnap.data().review,
            maxQuantity: docSnap.data().maxQuantity,
          })
        );
      }
    };
    try {
      await getData();
    } catch (e) {
      // console.log(e);
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
