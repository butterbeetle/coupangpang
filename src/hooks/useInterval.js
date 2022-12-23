import { useCallback, useRef, useState } from "react";

const useInterval = (initValue, ms) => {
  const [count, setCount] = useState(initValue);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
  }, [ms]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const resetNum = useCallback((num) => {
    setCount(num);
  }, []);

  return { count, start, stop, reset, resetNum };
};

export default useInterval;
