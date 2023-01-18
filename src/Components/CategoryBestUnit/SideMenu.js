import { useState } from "react";
import styles from "./SideMenu.module.css";
import SideMenuItem from "./SideMenuItem";

import { Reorder } from "framer-motion";
import Test from "./test";

const defaultItems = [
  {
    key: 0,
    title: "여성패션",
    styles: "woman-clothes",
    visible: true,
  },
  {
    key: 1,
    title: "남성패션",
    styles: "man-clothes",
    visible: true,
  },
  {
    key: 2,
    title: "뷰티",
    styles: "beauty",
    visible: true,
  },
  {
    key: 3,
    title: "출산/유아동",
    styles: "child",
    visible: true,
  },
  {
    key: 4,
    title: "식품",
    styles: "food",
    visible: true,
  },
  {
    key: 5,
    title: "주방용품",
    styles: "kitchen",
    visible: true,
  },
  {
    key: 6,
    title: "생활용품",
    styles: "living",
    visible: true,
  },
  {
    key: 7,
    title: "가구/홈인테리어",
    styles: "interior",
    visible: true,
  },
  {
    key: 8,
    title: "가전/디지털",
    styles: "digital",
    visible: true,
  },
  {
    key: 9,
    title: "스포츠/레저",
    styles: "sports",
    visible: true,
  },
  {
    key: 10,
    title: "자동차용품",
    styles: "car",
    visible: true,
  },
  {
    key: 11,
    title: "완구/취미",
    styles: "hobby",
    visible: true,
  },
  {
    key: 12,
    title: "문구/오피스",
    styles: "office",
    visible: true,
  },
  {
    key: 13,
    title: "도서/CD/DVD",
    styles: "book",
    visible: true,
  },
  {
    key: 14,
    title: "반려동물용품",
    styles: "pets",
    visible: true,
  },
  {
    key: 15,
    title: "여행",
    styles: "travel",
    visible: true,
  },
  {
    key: 16,
    title: "유아동패션",
    styles: "child-fashion",
    visible: true,
  },
  {
    key: 17,
    title: "헬스/건강식품",
    styles: "health",
    visible: true,
  },
];

const SideMenu = () => {
  const [click, setClick] = useState(false);
  const [sideBarItems, setSideBarItems] = useState(defaultItems);
  const [settingItems, setSettingItems] = useState(defaultItems);

  const [saveItems, setSaveItems] = useState(defaultItems);

  // 설정창 열기/닫기
  const onClick = () => {
    setClick((prev) => !prev);
  };

  //초기화 (setting <- default)
  const resetItems = () => {
    setSaveItems(settingItems);
    setSettingItems(defaultItems);
  };
  //취소
  const onCancel = () => {
    setSettingItems(saveItems);
    onClick();
  };
  //확인 (sideMenu <- setting)
  const onConfirm = () => {
    setSideBarItems(settingItems);
    setSaveItems(settingItems);
    onClick();
  };
  //체크 해제
  const visibleHandler = (key) => {
    setSettingItems(
      settingItems.map((item) =>
        item.key === key ? { ...item, visible: !item.visible } : item
      )
    );
    setSaveItems(settingItems);
  };

  return (
    <div className={styles["menu"]}>
      <ul>
        {sideBarItems.map(
          (item) =>
            item.visible && (
              <SideMenuItem key={item.key} title={item.title} item={item} />
            )
        )}
      </ul>
      <span onClick={onClick} className={styles["setting"]}>
        <i className={styles["box-tail"]} />
      </span>
      {click && (
        <>
          <div className={styles["setting-category"]}>
            <div className={styles["setting-category__title"]}>
              <p className={styles["title"]}>카테고리 설정하기</p>
              <p className={styles["description"]}>
                보고싶은 카테고리의 순서를 바꿔보세요.
              </p>
              <button onClick={resetItems} className={styles["reset"]}>
                초기화
              </button>
            </div>
            <Reorder.Group
              className={styles["menus"]}
              values={settingItems}
              onReorder={setSettingItems}
            >
              {settingItems.map((menu) => (
                <Test
                  key={menu.key}
                  title={menu.title}
                  item={menu}
                  visibleHandler={visibleHandler}
                />
              ))}
            </Reorder.Group>
            <div className={styles["buttons"]}>
              <button onClick={onCancel} className={styles["cancel"]}>
                취소
              </button>
              <button onClick={onConfirm} className={styles["confirm"]}>
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
