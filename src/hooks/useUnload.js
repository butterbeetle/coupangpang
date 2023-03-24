import { useEffect, useRef } from "react";

export const useUnload = (fn) => {
  const ref = useRef(fn);

  useEffect(() => {
    const onUnload = ref.current;
    /* 새로고침 시 실행 방지 */
    if (document.readyState === "complete") return;

    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [ref]);
};
