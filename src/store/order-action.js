import { orderActions } from "./order-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
/* indexedDB */
import { getIndexedDbData } from "../Util/IndexedDB";

export const getOrderData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "order", uid));
      if (docSnap.exists()) {
        dispatch(
          orderActions.replaceorder({
            items: docSnap.data().items || [],
            checked: docSnap.data().checked || [],
            totalQuantity: docSnap.data().totalQuantity,
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

export const sendOrderData = (order) => {
  return async () => {
    const sendData = async () => {
      const { uid } = await getIndexedDbData();
      await setDoc(doc(firestore, "order", uid), {
        items: order.items,
        totalQuantity: order.totalQuantity,
        checked: order.checked,
      });
    };
    try {
      await sendData();
    } catch (e) {
      // console.log(e);
    }
  };
};
