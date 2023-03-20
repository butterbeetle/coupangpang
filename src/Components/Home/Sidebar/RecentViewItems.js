import styles from "./RecentViewItems.module.css";
/* redux */
import { useSelector } from "react-redux";
import RecentViewItem from "./RecentViewItem";

const RecentViewItems = () => {
  const recentViewItems = useSelector((state) => state.recentView.items);

  return (
    <div className={styles["items"]}>
      {recentViewItems.map((item) => (
        <RecentViewItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RecentViewItems;
