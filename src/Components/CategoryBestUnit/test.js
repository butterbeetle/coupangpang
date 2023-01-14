import { Reorder } from "framer-motion";
import styles from "./test.module.css";

const Test = ({ item }) => {
  return (
    <Reorder.Item key={item.key} value={item} className={styles["list"]}>
      {item.title}
    </Reorder.Item>
  );
};

export default Test;
