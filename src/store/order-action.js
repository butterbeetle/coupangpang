import { orderActions } from "./order-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
/* indexedDB */
import { getIndexedDbData } from "../Util/IndexedDB";

export const getOrderedData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "order", uid));
      if (docSnap.exists()) {
        dispatch(orderActions.setOrderedItems({ data: docSnap.data() || [] }));
      }
    };
    try {
      await getData();
    } catch (e) {
      // console.log("getOrderedData error", e);
    }
  };
};

export const sendOrderedData = (order) => {
  return async () => {
    const sendData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "order", uid));
      // console.log("sendOrderedData order", order);
      // console.log("sendOrderedData docSnap", docSnap.data().order);
      let data = [];
      if (docSnap.data().order) {
        data = [...docSnap.data().order, order];
      } else {
        data = [order];
      }
      // console.log("sendOrderedData data", data);
      await setDoc(doc(firestore, "order", uid), { order: data });
    };
    try {
      await sendData();
    } catch (e) {
      // console.log("sendOrderedData error", e);
    }
  };
};
