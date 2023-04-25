import styles from "./AddAddrData.module.css";
import Name from "./Name";
import Post from "./Post";
import Phone from "./Phone";
import Info from "./Info";
import Tel from "./Tel";
import Button from "./Button";
import Select from "./Select";

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
import { addrActions } from "../../../../store/address-slice";
import { sendAddrData } from "../../../../store/address-action";
import { useNavigate } from "react-router-dom";

const AddAddrData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addrData = useSelector((state) => state.addr);

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
    }, // Add Cyclic deps here because when require itself ?
    ["tel", "tel"]
  );

  const {
    register,
    handleSubmit,
    getValues,
    watch,
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
  /* 주소 찾기 열기 */
  const [openSearchPost, setOpenSearchPost] = useState(false);
  const openSearchPostHandler = () => {
    setOpenSearchPost(true);
  };

  /* 주소 설정 후 */
  const onComplete = (data) => {
    setOpenSearchPost(false);
    dispatch(
      addrActions.setAddr({
        roadAddress: data.roadAddress,
        zonecode: data.zonecode,
      })
    );
  };
  /* Submit */
  const onsubmit = () => {
    dispatch(
      addrActions.addAddr({
        id: addrData.data.length,
        name: addrData.name,
        phone: addrData.phone,
        roadAddress: addrData.roadAddress,
        detailAddress: addrData.detailAddress,
        zonecode: addrData.zonecode,
        delivaryDawn: addrData.delivaryDawn,
        delivaryDawnReq: addrData.delivaryDawnReq,
        delivaryNormal: addrData.delivaryNormal,
        delivaryNormalReq: addrData.delivaryNormal.Req,
      })
    );
    navigate("/addressbook/show");
  };

  /* AddrData firebase에 저장 */
  useEffect(() => {
    if (addrData.changed) {
      dispatch(sendAddrData(addrData.data));
    }
  }, [addrData, dispatch]);

  return (
    <div>
      <header className={styles["header"]}>배송지 추가</header>
      <main className={styles["main"]}>
        <form onSubmit={handleSubmit(onsubmit)}>
          {openSearchPost ? (
            <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
          ) : (
            <div>
              <Name
                register={register("name")}
                value={watch("name")}
                errors={errors.name}
              />
              <Post
                register={register("post")}
                value={watch("post")}
                errors={errors.post}
                openSearchPostHandler={openSearchPostHandler}
              />
              <Phone
                register={register("phone")}
                errors={errors.phone}
                value={watch("phone")}
                getValues={getValues("phone")}
                setValue={setValue}
                openTel={openTel}
                openTelHandler={openTelHandler}
              />
              {openTel && (
                <Tel
                  register={register("tel")}
                  errors={errors.tel}
                  onClose={closeTelHandler}
                />
              )}
              <Info />
              <Select />
              <Button />
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default AddAddrData;
