import styles from "./Popup.module.css";

import AddAddress from "./AddAddress/AddAddress";
import NormalReq from "./NormalReq/NormalReq";
import DawnReq from "./DawnReq/DawnReq";

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
import { sendAddrData } from "../../../store/address-action";
import ShowAddr from "./ShowAddr/ShowAddr";
import { popupActions } from "../../../store/popup-slice";

const Popup = () => {
  const formSchema = yup.object().shape(
    {
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
        .nullable()
        .notRequired()
        .when("tel", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.matches(
              /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
              "연락처 번호를 정확하게 입력해주세요."
            ),
        }),
    }, // Add Cyclic deps here because when require itself
    ["tel", "tel"]
  );

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(formSchema) });

  /* 연락처 추가 */
  const [openTel, setOpenTel] = useState(false);
  const openTelHandler = () => {
    setOpenTel(true);
  };
  const closeTelHandler = () => {
    clearErrors("tel");
    setOpenTel(false);
  };

  /* Redux에 data 저장용 */
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr);

  /* 주소 설정 후 */
  const onComplete = (data) => {
    dispatch(popupActions.move("add"));
    dispatch(
      addrActions.setAddr({
        roadAddress: data.roadAddress,
        zonecode: data.zonecode,
      })
    );
  };

  /* Submit */
  const onsubmit = (data) => {
    dispatch(
      addrActions.setAddr({
        name: data.name,
        phone: data.phone,
      })
    );

    dispatch(
      addrActions.addAddr({
        id: addrData.data.length,
        name: data.name,
        phone: data.phone,
        roadAddress: addrData.roadAddress,
        detailAddress: addrData.detailAddress,
        zonecode: addrData.zonecode,
      })
    );

    dispatch(popupActions.move("show"));
  };

  /* Error */
  const onError = (e) => {
    console.log(e);
  };

  /* AddrData firebase에 저장 */
  useEffect(() => {
    if (addrData.changed) {
      dispatch(sendAddrData(addrData.data));
    }
  }, [addrData, dispatch]);

  /* Move */
  const location = useSelector((state) => state.popup.location);
  const title = useSelector((state) => state.popup.title);
  console.log(location, title);

  /* Addr Data */
  const addr = useSelector((state) => state.addr);
  console.log(addr.data);
  return (
    <div className={styles["content"]}>
      <header className={styles["header"]}>{title}</header>
      <main className={styles["main"]}>
        <form onSubmit={handleSubmit(onsubmit, onError)}>
          {location === "show" && <ShowAddr />}
          {location === "add" && (
            <AddAddress
              register={register}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              openTel={openTel}
              openTelHandler={openTelHandler}
              closeTelHandler={closeTelHandler}
            />
          )}

          {location === "normal" && <NormalReq />}
          {location === "dawn" && <DawnReq />}
          {location === "post" && (
            <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
          )}
        </form>
      </main>
    </div>
  );
};

export default Popup;