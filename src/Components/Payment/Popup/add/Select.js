import styles from "./Select.module.css";
/* Icon */
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";
/* Animating */
import { motion } from "framer-motion";
/* Hook */

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";

const Select = () => {
  const dispatch = useDispatch();
  const setting = useSelector((state) => state.addr.default_setting);

  const onClick = () => {
    dispatch(
      addrActions.setAddr({
        default_setting: !setting,
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
          opacity: setting ? 1 : 0,
          y: setting ? -13 : 0,
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
