import { loggedActions } from "./login-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
/* indexedDB */
import { getIndexedDbData } from "../Util/IndexedDB";

export const getUserData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "users", uid));
      if (docSnap.exists()) {
        dispatch(
          loggedActions.replaceUserData({
            data: docSnap.data(),
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
