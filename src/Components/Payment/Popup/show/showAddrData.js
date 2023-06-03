import styles from "./showAddrData.module.css";
/* Hook */
import { useEffect } from "react";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { getAddrData, sendAddrData } from "../../../../store/address-action";
/* Components */
import AddrData from "./AddrData";
/* Icon */
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { Link } from "react-router-dom";
import { addrActions } from "../../../../store/address-slice";

let init = true;
const ShowAddrData = () => {
  const dispatch = useDispatch();
  const addrData = useSelector((state) => state.addr);

  useEffect(() => {
    if (init) {
      init = false;
      dispatch(getAddrData());
    }

    if (addrData.changed) {
      dispatch(sendAddrData(addrData.data));
    }

    dispatch(addrActions.reset());
  }, [addrData, dispatch]);

  return (
    <div>
      <header className={styles["header"]}>배송지 선택</header>
      <div className={styles["container"]}>
        <main className={styles["main"]}>
          {addrData.data.map((data) => (
            <AddrData key={data.id} item={data} />
          ))}
        </main>
        <Link to="/addressbook/add" className={styles["add"]}>
          배송지 추가
          <AiOutlinePlus />
        </Link>
      </div>
    </div>
  );
};

export default ShowAddrData;
