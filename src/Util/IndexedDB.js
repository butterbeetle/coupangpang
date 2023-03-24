import { openDB } from "idb";

export const getIndexedDbData = async () => {
  const db = await openDB("firebaseLocalStorageDb");
  const tx = db.transaction("firebaseLocalStorage", "readonly");
  const store = tx.objectStore("firebaseLocalStorage");
  const result = await store.get(
    `firebase:authUser:${process.env.REACT_APP_APIKEY}:[DEFAULT]`
  );
  db.close();
  if (result) {
    return { uid: result.value.uid, name: result.value.displayName };
  } else {
    return;
  }
};

/* 필요 없을 듯? */
export const deleteIndexedDbData = async () => {
  const db = await openDB("firebaseLocalStorageDb");
  const tx = db.transaction("firebaseLocalStorage", "readwrite");
  const store = tx.objectStore("firebaseLocalStorage");
  if (store) {
    await store.clear();
  }
  return;
};
