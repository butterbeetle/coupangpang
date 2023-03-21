import { recentViewSliceActions } from "./recentView-slice";

/* firebase */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";

/* indexedDB */
import { getIndexedDbData } from "../Util/IndexedDB";

export const getRecentViewData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const { uid } = await getIndexedDbData();
      if (uid === null) return;
      const docSnap = await getDoc(doc(firestore, "recentView", uid));
      if (docSnap.exists()) {
        // console.log("Redux:", docSnap.data().items);
        dispatch(
          recentViewSliceActions.replaceRecentView({
            items: docSnap.data().items || [],
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

export const sendRecentViewData = (RecentViewData) => {
  return async () => {
    const sendData = async () => {
      const { uid } = await getIndexedDbData();
      await setDoc(doc(firestore, "recentView", uid), {
        items: RecentViewData,
      });
    };
    try {
      await sendData();
    } catch (e) {
      // console.log(e);
    }
  };
};
