import { cartActions } from "./cart-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const uid = sessionStorage.getItem("uid");
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "cart", uid));
      if (docSnap.exists()) {
        dispatch(
          cartActions.replaceCart({
            items: docSnap.data().items || [],
            totalQuantity: docSnap.data().totalQuantity,
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

export const sendCartData = (cart) => {
  return async () => {
    const sendData = async () => {
      const uid = sessionStorage.getItem("uid");
      await setDoc(doc(firestore, "cart", uid), cart);
    };
    try {
      await sendData();
    } catch (e) {
      console.log(e);
    }
  };
};
