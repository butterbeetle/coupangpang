import styles from "./Post.module.css";

/* Icon */
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";

/* Hook */
import useInput from "../../../../hooks/useInput";

const Post = ({ register, value, errors, openSearchPostHandler }) => {
  const dispatch = useDispatch();
  const { roadAddress, detailAddress, zonecode } = useSelector(
    (state) => state.addr
  );

  const {
    click: postClick,
    clickHandler: postClickHandler,
    blurHandler: postBlurHandler,
  } = useInput();

  const blurHandler = () => {
    postBlurHandler();
    dispatch(
      addrActions.setAddr({
        detailAddress: value,
      })
    );
  };

  let addrInfo = roadAddress ? (
    <p className={styles["addr"]}>{`${roadAddress} [${zonecode}]`}</p>
  ) : (
    <p>우편번호 찾기</p>
  );

  return (
    <div
      className={`${styles["input__box"]} ${
        errors ? styles["error__border"] : ""
      }`}
    >
      <div className={styles["icon__box"]}>
        <MdLocationOn />
      </div>
      <div className={styles["post__box"]}>
        <div className={styles["postCode"]} onClick={openSearchPostHandler}>
          {addrInfo}
          <MdSearch />
        </div>
        {roadAddress && (
          <div
            className={styles["postCode"]}
            onClick={postClickHandler}
            onBlur={blurHandler}
          >
            <input
              type="text"
              value={value ? value : detailAddress}
              placeholder={postClick ? "" : "상세주소"}
              {...register}
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
