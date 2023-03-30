import styles from "./Post.module.css";

/* Icon */
import { MdLocationPin, MdSearch } from "react-icons/md";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
import { popupActions } from "../../../../store/popup-slice";

/* Hook */
import useInput from "../../../../hooks/useInput";
import { useState } from "react";

const Post = ({ register, errors }) => {
  const {
    click: addrClick,
    clickHandler: addrClickHandler,
    blurHandler: addrBlurHandler,
  } = useInput();

  const addrData = useSelector((state) => state.addr);
  const dispatch = useDispatch();
  const [, setDetailAddress] = useState("");

  const addrBlur = (e) => {
    addrBlurHandler();
    setDetailAddress(e.target.value);
    dispatch(
      addrActions.setAddr({
        detailAddress: e.target.value,
      })
    );
  };

  let addrInfo = addrData.roadAddress ? (
    <p
      className={styles["addr"]}
    >{`${addrData.roadAddress} [${addrData.zonecode}]`}</p>
  ) : (
    <p>우편번호 찾기</p>
  );
  const onClick = (e) => {
    dispatch(popupActions.move(e));
  };
  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <MdLocationPin />
      </div>
      <div className={styles["post__box"]}>
        <div className={styles["postCode"]} onClick={() => onClick("post")}>
          {addrInfo}
          <MdSearch />
        </div>
        {addrData.roadAddress && (
          <div className={styles["postCode"]}>
            <input
              {...register}
              onClick={addrClickHandler}
              onBlur={addrBlur}
              type="text"
              placeholder={addrClick ? "" : "상세주소"}
            />
          </div>
        )}
      </div>
      {errors && (
        <span className={styles["error__message"]}>{errors.message}</span>
      )}
    </div>
  );
};

export default Post;
