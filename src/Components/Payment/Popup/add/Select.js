import styles from "./Select.module.css";
/* Icon */
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";
/* Animating */
import { motion } from "framer-motion";
/* Hook */
import { useState } from "react";
import { useLocation } from "react-router-dom";
/* Redux */
import { useDispatch } from "react-redux";
import { addrActions } from "../../../../store/address-slice";

const Select = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [click, setClick] = useState(state ?? false);

  const onClick = () => {
    setClick((prev) => !prev);
    dispatch(
      addrActions.setAddr({
        default_setting: !click,
      })
    );
  };

  return (
    <div className={styles["main"]} onClick={onClick}>
      <motion.div
        initial={{
          opacity: 0,
          y: -13,
        }}
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

export default Select;
