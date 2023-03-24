import { useEffect, useRef } from "react";

export const useUnload = (fn) => {
  const ref = useRef(fn);

  useEffect(() => {
    const onUnload = ref.current;
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [ref]);
};
