import { useCallback, useEffect, useRef } from "react";

const useOutsideClick = (clickFn) => {
  const ref = useRef(null);

  const clickHandler = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        clickFn();
      }
    },
    [clickFn, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, [clickHandler]);

  return ref;
};

export default useOutsideClick;
