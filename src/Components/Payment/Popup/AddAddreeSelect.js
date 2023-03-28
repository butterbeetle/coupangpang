import styles from "./AddAddreeSelect.module.css";
/* Icon */
import { BsCheck } from "react-icons/bs";
/* Animating */
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addrActions } from "../../../store/address-slice";
const AddAddreeSelect = () => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick((prev) => !prev);
    dispatch(
      addrActions.addAddr({
        default_setting: !click,
      })
    );
  };

  return (
    <div className={styles["main"]} onClick={onClick}>
      <motion.div
        animate={{
          opacity: click ? 1 : 0,
          y: click ? -13 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <BsCheck />
      </motion.div>
      <div className={styles["box"]} />
      기본 배송지로 선택
    </div>
  );
};

export default AddAddreeSelect;
