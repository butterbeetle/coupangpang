import styles from "./AddAddress.module.css";
import AddAddressName from "./AddAddressName";
import AddAddressPost from "./AddAddressPost";

/* Hook */
import { useForm } from "react-hook-form";
import { useState } from "react";

/* Yup */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/* Redux */
import { useDispatch } from "react-redux";
import { addrActions } from "../../../store/address-slice";

/* API */
import DaumPostcodeEmbed from "react-daum-postcode";
import AddAddressPhone from "./AddAddressPhone";

const AddAddress = () => {
  const formSchema = yup.object({
    name: yup.string().required("받는 사람 이름을 입력해주세요."),
    phone: yup
      .string()
      .required("휴대폰 번호를 입력해주세요.")
      .matches(
        /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
        "휴대폰 번호를 정확하게 입력해주세요."
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(formSchema) });

  const dispatch = useDispatch();

  const [openPost, setOpenPost] = useState(false);
  const onClick = () => {
    setOpenPost(true);
  };
  const onComplete = (data) => {
    dispatch(
      addrActions.addAddr({
        roadAddress: data.roadAddress,
        zonecode: data.zonecode,
      })
    );
    setOpenPost(false);
  };

  const onsubmit = (data) => {
    console.log(data);
  };
  const onError = () => {};

  return (
    <div className={styles["content"]}>
      {openPost === false ? (
        <>
          <header className={styles["header"]}>배송지 추가</header>
          <main className={styles["main"]}>
            <form onSubmit={handleSubmit(onsubmit, onError)}>
              <AddAddressName
                register={register("name")}
                errors={errors.name}
              />
              <AddAddressPost onClick={onClick} />
              <AddAddressPhone
                register={register("phone")}
                errors={errors.phone}
              />
            </form>
          </main>
        </>
      ) : (
        <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
      )}
    </div>
  );
};

export default AddAddress;
