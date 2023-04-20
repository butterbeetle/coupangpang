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
  openTel,
  openTelHandler,
  closeTelHandler,
}) => {
  return (
    <div>
      <Name register={register("name")} errors={errors.name} />
      <Post
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
      <Info />
      <Select />
      <Button />
    </div>
  );
};

export default AddAddress;
