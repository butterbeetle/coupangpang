import styles from "./AddAddress.module.css";
import AddAddressName from "./AddAddressName";
import AddAddressPost from "./AddAddressPost";
import AddAddressPhone from "./AddAddressPhone";
/* API */
import DaumPostcodeEmbed from "react-daum-postcode";

/* Hook */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

/* Yup */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../store/address-slice";
import AddAddressInfo from "./AddAddressInfo";
import AddAddressTel from "./AddAddressTel";
import AddAddreeButton from "./AddAddreeButton";
import AddAddreeSelect from "./AddAddreeSelect";
import AddAddressNormalReq from "./AddAddressNormalReq";

const AddAddress = () => {
  const formSchema = yup.object({
    name: yup.string().required("받는 사람 이름을 입력해주세요."),
    post: yup.string().required("상세주소를 입력해주세요."),
    phone: yup
      .string()
      .required("휴대폰 번호를 입력해주세요.")
      .matches(
        /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
        "휴대폰 번호를 정확하게 입력해주세요."
      ),
    tel: yup
      .string()
      .matches(
        /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
        "연락처 번호를 정확하게 입력해주세요."
      ),
  });
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(formSchema) });

  /* Title */
  const [title, setTitle] = useState("배송지 추가");

  /* 우편번호 찾기 */
  const [openPost, setOpenPost] = useState(false);
  const openPostHandler = () => {
    setOpenPost(true);
  };

  /* 연락처 추가 */
  const [openTel, setOpenTel] = useState(false);
  const openTelHandler = () => {
    setOpenTel(true);
  };
  const closeTelHandler = () => {
    setOpenTel(false);
  };

  /* 일반 배송 정보 */
  const [openNormalReq, setOpenNormalReq] = useState(false);
  const openNormalReqHandler = () => {
    setOpenNormalReq(true);
  };
  const closeNormalReqHandler = () => {
    setOpenNormalReq(false);
  };
  /* 새벽 배송 정보 */
  const [openDawnReq, setOpenDawnReq] = useState(false);
  const openDawnReqHandler = () => {
    setOpenDawnReq(true);
  };
  const closeDawnReqHandler = () => {
    setOpenDawnReq(false);
  };
  /* Redux에 data 저장 */
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr);

  const onComplete = (data) => {
    dispatch(
      addrActions.addAddr({
        roadAddress: data.roadAddress,
        zonecode: data.zonecode,
      })
    );
    setOpenPost(false);
  };

  /* Submit */
  const onsubmit = (data) => {
    console.log(data);
  };

  /* Error */
  const onError = () => {};

  /* Title */
  useEffect(() => {
    if (openPost) {
      setTitle("우편번호 찾기");
    } else if (openNormalReq) {
      setTitle("배송 요청사항");
    } else if (openDawnReq) {
      setTitle("새벽배송 요청사항");
    } else {
      setTitle("배송지 추가");
    }
  }, [openPost, openNormalReq, openDawnReq]);

  return (
    <div className={styles["content"]}>
      <>
        <header className={styles["header"]}>{title}</header>
        <main className={styles["main"]}>
          <form onSubmit={handleSubmit(onsubmit, onError)}>
            <div
              className={`${
                openPost || openNormalReq || openDawnReq ? styles["none"] : ""
              }`}
            >
              <AddAddressName
                register={register("name")}
                errors={errors.name}
              />
              <AddAddressPost
                onClick={openPostHandler}
                register={register("post")}
                errors={errors.post}
                getValues={getValues("post")}
                setValue={setValue}
              />
              <AddAddressPhone
                register={register("phone")}
                errors={errors.phone}
                getValues={getValues("phone")}
                setValue={setValue}
                openTel={openTel}
                onOpen={openTelHandler}
              />
              {openTel && (
                <AddAddressTel
                  register={register("tel")}
                  errors={errors.tel}
                  onClose={closeTelHandler}
                />
              )}
              <AddAddressInfo
                onClickNor={openNormalReqHandler}
                onClickDawn={openDawnReqHandler}
              />
              <AddAddreeSelect />
              <AddAddreeButton />
            </div>
            {openNormalReq && <AddAddressNormalReq />}
          </form>
        </main>
      </>
      {openPost && (
        <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
      )}
    </div>
  );
};

export default AddAddress;
