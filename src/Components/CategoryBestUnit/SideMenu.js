import { useState } from "react";
import styles from "./SideMenu.module.css";
import SideMenuItem from "./SideMenuItem";

//18
const menuItems = [
  {
    title: "여성패션",
    styles: "woman-clothes",
    visible: true,
  },
  {
    title: "남성패션",
    styles: "man-clothes",
    visible: true,
  },
  {
    title: "뷰티",
    styles: "beauty",
    visible: true,
  },
  {
    title: "출산/유아동",
    styles: "child",
    visible: true,
  },
  {
    title: "식품",
    styles: "food",
    visible: true,
  },
  {
    title: "주방용품",
    styles: "kitchen",
    visible: true,
  },
  {
    title: "생활용품",
    styles: "living",
    visible: true,
  },
  {
    title: "가구/홈인테리어",
    styles: "interior",
    visible: true,
  },
  {
    title: "가전/디지털",
    styles: "digital",
    visible: true,
  },
  {
    title: "스포츠/레저",
    styles: "sports",
    visible: true,
  },
  {
    title: "자동차용품",
    styles: "car",
    visible: true,
  },
  {
    title: "완구/취미",
    styles: "hobby",
    visible: true,
  },
  {
    title: "문구/오피스",
    styles: "office",
    visible: true,
  },
  {
    title: "도서/CD/DVD",
    styles: "book",
    visible: true,
  },
  {
    title: "반려동물용품",
    styles: "pets",
    visible: true,
  },
  {
    title: "여행",
    styles: "travel",
    visible: true,
  },
  {
    title: "유아동패션",
    styles: "child-fashion",
    visible: true,
  },
  {
    title: "헬스/건강식품",
    styles: "health",
    visible: true,
  },
];
const SideMenu = () => {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className={styles["menu"]}>
      <ul>
        {menuItems.map((item, index) => (
          <SideMenuItem index={index} title={item.title} style={item.styles} />
        ))}
      </ul>
      <span onClick={onClick} className={styles["setting"]} />
      <div className={styles["setting-category"]}>
        <div className={styles["setting-category__title"]}>
          <p className={styles["title"]}>카테고리 설정하기</p>
          <p className={styles["description"]}>
            보고싶은 카테고리의 순서를 바꿔보세요.
          </p>
          <button className={styles["reset"]}>초기화</button>
        </div>
        <ul className={styles["second"]}>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
        <div className={styles["buttons"]}>
          <button className={styles["cancel"]}>취소</button>
          <button className={styles["confirm"]}>확인</button>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
