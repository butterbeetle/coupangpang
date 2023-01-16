import { Reorder } from "framer-motion";
import { useState } from "react";
import styles from "./test.module.css";
import icons from "./ItemsIcon.module.css";

const Test = ({ item }) => {
  const [active, setActive] = useState(false);
  const [isCheck, setIsCheck] = useState(true);

  const onDragStart = () => {
    setActive((prev) => (prev = true));
  };
  const onDragEnd = () => {
    setActive((prev) => (prev = false));
  };
  const onClick = () => {
    setIsCheck((prev) => !prev);
  };
  return (
    <Reorder.Item
      className={`${styles["list"]} ${
        active ? styles["active"] : styles["none"]
      }`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      key={item.key}
      value={item}
    >
      <label
        htmlFor={item.styles}
        className={`${isCheck ? styles["checked"] : styles["unchecked"]}`}
      >
        <input
          onClick={onClick}
          checked={isCheck}
          type="checkbox"
          id={item.styles}
        />
        <i className={`${styles["icon"]} ${icons[item.styles]}`} />
        <span>{item.title}</span>
        <i className={styles["control"]} />
      </label>
    </Reorder.Item>
  );
};

export default Test;
