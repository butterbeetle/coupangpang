import { Reorder } from "framer-motion";
import { useState } from "react";
import styles from "./test.module.css";

const Test = ({ item }) => {
  const [active, setActive] = useState(false);
  const onMouseDown = () => {
    setActive((prev) => (prev = true));
  };
  const onMouseUp = () => {
    setActive((prev) => (prev = false));
  };

  return (
    <Reorder.Item
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      key={item.key}
      value={item}
      className={`${styles["list"]} ${
        active ? styles["active"] : styles["none"]
      }`}
    >
      {item.title}
    </Reorder.Item>
  );
};

export default Test;
