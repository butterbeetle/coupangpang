import styles from "./AddAddressPost.module.css";

/* Icon */
import { MdLocationPin, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { useState } from "react";
import { addrActions } from "../../../store/address-slice";

const AddAddressPost = ({ onClick }) => {
  const {
    click: addrClick,
    clickHandler: addrClickHandler,
    blurHandler: addrBlurHandler,
  } = useInput();

  const addrData = useSelector((state) => state.addr);
  const dispatch = useDispatch();
  const [, setDetailAddress] = useState("");

  const addrBlur = (e) => {
    setDetailAddress(e.target.value);
    dispatch(
      addrActions.addAddr({
        detailAddress: e.target.value,
      })
    );
    addrBlurHandler();
  };

  let addrInfo = addrData.roadAddress ? (
    <p
      className={styles["addr"]}
    >{`${addrData.roadAddress} [${addrData.zonecode}]`}</p>
  ) : (
    <p>우편번호 찾기</p>
  );

  return (
    <div className={styles["input__box"]}>
      <div className={styles["icon__box"]}>
        <MdLocationPin />
      </div>
      <div className={styles["post__box"]}>
        <div className={styles["postCode"]} onClick={onClick}>
          {addrInfo}
          <MdSearch />
        </div>
        {addrData.roadAddress && (
          <div className={styles["postCode"]}>
            <input
              onClick={addrClickHandler}
              onBlur={addrBlur}
              type="text"
              placeholder={addrClick ? "" : "상세주소"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAddressPost;
