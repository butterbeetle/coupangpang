import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";
import styles from "./SideMenuSettingItem.module.css";
import icons from "./ItemsIcon.module.css";

const Test = ({ item, visibleHandler }) => {
  const controls = useDragControls();
  const [isDrag, setIsDrag] = useState(false);

  const onDragStart = () => {
    setIsDrag((prev) => (prev = true));
  };
  const onDragEnd = () => {
    setIsDrag((prev) => (prev = false));
  };
  const onChange = () => {
    visibleHandler(item.key);
  };

  return (
    <Reorder.Item
      className={`${styles["list"]} ${
        isDrag ? styles["active"] : styles["none"]
      }`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      key={item.key}
      value={item}
      dragListener={false}
      dragControls={controls}
    >
      <label
        className={`${item.visible ? styles["checked"] : styles["unchecked"]}`}
        htmlFor={item.styles}
      >
        <input
          checked={item.visible ? true : false}
          onChange={onChange}
          type="checkbox"
          id={item.styles}
        />
        <i className={`${styles["icon"]} ${icons[item.styles]}`} />
        <span>{item.title}</span>
      </label>
      <i
        className={styles["control"]}
        onPointerDown={(e) => controls.start(e)}
      />
    </Reorder.Item>
  );
};

export default Test;
