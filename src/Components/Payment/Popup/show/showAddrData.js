import styles from "./showAddrData.module.css";
/* Hook */
import { useEffect } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { getAddrData } from "../../../../store/address-action";
/* Components */
import AddrData from "./AddrData";
/* Icon */
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { Link } from "react-router-dom";

const ShowAddrData = () => {
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr.data);

  useEffect(() => {
    dispatch(getAddrData());
  }, [dispatch]);

  return (
    <div>
      <header className={styles["header"]}>배송지 선택</header>
      <div className={styles["container"]}>
        <main className={styles["main"]}>
          {addrData.map((data) => (
            <AddrData key={data.id} item={data} />
          ))}
        </main>
        <Link to="/addressbook/add">
          배송지 추가
          <AiOutlinePlus />
        </Link>
      </div>
    </div>
  );
};

export default ShowAddrData;
