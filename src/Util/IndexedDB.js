import { openDB } from "idb";

export const getIndexedDbData = async () => {
  const db = await openDB("firebaseLocalStorageDb");
  const tx = db.transaction("firebaseLocalStorage", "readonly");
  const store = tx.objectStore("firebaseLocalStorage");
  const result = await store.get(
    `firebase:authUser:${process.env.REACT_APP_APIKEY}:[DEFAULT]`
  );
  db.close();
  return { uid: result.value.uid, name: result.value.displayName };
};
