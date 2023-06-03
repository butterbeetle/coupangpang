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
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
/* Yup */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addrActions } from "../../../../store/address-slice";
/* UI */
import LoadingModal from "../../../../UI/LoadingModal";
// import { sendAddrData } from "../../../../store/address-action";

const AddAddrData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const addrData = useSelector((state) => state.addr);

  const [loading, setLoading] = useState(false);

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

  /* 저장 */
  const onsubmit = () => {
    dispatch(
      addrActions.addAddr({
        id: state?.id ?? Math.floor((Date.now() * Math.random()) / 32),
        name: addrData.name,
        phone: addrData.phone,
        roadAddress: addrData.roadAddress,
        detailAddress: addrData.detailAddress,
        zonecode: addrData.zonecode,
        delivaryDawn: addrData.delivaryDawn,
        delivaryDawnReq: addrData.delivaryDawnReq,
        delivaryNormal: addrData.delivaryNormal,
        delivaryNormalReq: addrData.delivaryNormalReq,
      })
    );
    setLoading((prev) => !prev);
  };
  const moveTo2Sec = useCallback(() => {
    setLoading((prev) => !prev);
    navigate("/addressbook/show");
  }, [navigate]);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(moveTo2Sec, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loading, moveTo2Sec]);

  /* AddrData firebase에 저장 */
  // useEffect(() => {
  //   if (addrData.changed) {
  //     console.log("add 저장?");
  //     dispatch(sendAddrData(addrData.data));
  //     dispatch(addrActions.reset());
  //   }
  // }, [addrData, dispatch, navigate]);

  /* 수정버튼 누르고 들어왔을 때 */
  useEffect(() => {
    if (state !== null) {
      dispatch(
        addrActions.setAddr({
          name: state.name,
          phone: state.phone,
          roadAddress: state.roadAddress,
          detailAddress: state.detailAddress,
          zonecode: state.zonecode,
          delivaryDawn: state.delivaryDawn,
          delivaryDawnReq: state.delivaryDawnReq,
          delivaryNormal: state.delivaryNormal,
          delivaryNormalReq: state.delivaryNormalReq,
          default_setting: state.default_setting,
        })
      );
      setValue("name", state.name);
      setValue("phone", state.phone);
      setValue("post", state.detailAddress);
    }
  }, [dispatch, state, setValue]);

  return (
    <div>
      {loading && <LoadingModal />}
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
                setValue={setValue}
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
              <Button setValue={setValue} handleSubmit={handleSubmit} />
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default AddAddrData;
