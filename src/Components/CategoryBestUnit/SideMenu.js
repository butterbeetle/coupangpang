import { useContext } from "react";
import styles from "./SideMenu.module.css";
import SideMenuItem from "./SideMenuItem";

import { Reorder } from "framer-motion";
import SideMenuSettingItem from "./SideMenuSettingItem";
import { SideMenuContext } from "../../store/sideMenu-context";

const SideMenu = () => {
  const sideCtx = useContext(SideMenuContext);

  return (
    <div className={styles["menu"]}>
      <ul>
        {sideCtx.sideBarItems.map(
          (item, idx) =>
            item.visible && (
              <SideMenuItem
                key={item.key}
                title={item.title}
                item={item}
                idx={idx}
              />
            )
        )}
      </ul>
      <span onClick={sideCtx.onClick} className={styles["setting"]}>
        {sideCtx.click && <i className={styles["box-tail"]} />}
      </span>
      {sideCtx.click && (
        <>
          <div className={styles["setting-category"]}>
            <div className={styles["setting-category__title"]}>
              <p className={styles["title"]}>카테고리 설정하기</p>
              <p className={styles["description"]}>
                보고싶은 카테고리의 순서를 바꿔보세요.
              </p>
              <button onClick={sideCtx.onReset} className={styles["reset"]}>
                초기화
              </button>
            </div>
            <Reorder.Group
              className={styles["menus"]}
              values={sideCtx.settingItems}
              onReorder={sideCtx.setSettingItems}
            >
              {sideCtx.settingItems.map((menu) => (
                <SideMenuSettingItem
                  key={menu.key}
                  title={menu.title}
                  item={menu}
                  visibleHandler={sideCtx.onVisible}
                />
              ))}
            </Reorder.Group>
            <div className={styles["buttons"]}>
              <button onClick={sideCtx.onCancel} className={styles["cancel"]}>
                취소
              </button>
              <button onClick={sideCtx.onConfirm} className={styles["confirm"]}>
                확인
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SideMenu;
