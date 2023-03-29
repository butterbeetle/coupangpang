import styles from "./AddAddress.module.css";
import Name from "./Name";
import Post from "./Post";
import Phone from "./Phone";
import Info from "./Info";
import Tel from "./Tel";
import Button from "./Button";
import Select from "./Select";

const AddAddress = ({
  register,
  errors,
  getValues,
  setValue,
  openPostHandler,
  openTel,
  openTelHandler,
  closeTelHandler,
  openNormalReqHandler,
  openDawnReqHandler,
}) => {
  return (
    <>
      <header className={styles["header"]}>배송지 추가</header>
      <div>
        <Name register={register("name")} errors={errors.name} />
        <Post
          onClick={openPostHandler}
          register={register("post")}
          errors={errors.post}
          getValues={getValues("post")}
          setValue={setValue}
        />
        <Phone
          register={register("phone")}
          errors={errors.phone}
          getValues={getValues("phone")}
          setValue={setValue}
          openTel={openTel}
          onOpen={openTelHandler}
        />
        {openTel && (
          <Tel
            register={register("tel")}
            errors={errors.tel}
            onClose={closeTelHandler}
          />
        )}
        <Info
          onClickNor={openNormalReqHandler}
          onClickDawn={openDawnReqHandler}
        />
        <Select />
        <Button />
      </div>
    </>
  );
};

export default AddAddress;
