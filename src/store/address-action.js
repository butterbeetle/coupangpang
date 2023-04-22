import { addrActions } from "./address-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
/* indexedDB */
import { getIndexedDbData } from "../Util/IndexedDB";

export const getAddrData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "addr", uid));
      if (docSnap.exists()) {
        dispatch(
          addrActions.replaceAddr({
            data: docSnap.data().data || [],
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

export const sendAddrData = (addr) => {
  return async () => {
    const sendData = async () => {
      const { uid } = await getIndexedDbData();
      await setDoc(doc(firestore, "addr", uid), {
        data: addr,
      });
    };
    try {
      await sendData();
    } catch (e) {
      // console.log(e);
    }
  };
};
