import styles from "./CategoryBestUnit.module.css";

import SideMenu from "./CategoryBestUnit/SideMenu";
import Contents from "./CategoryBestUnit/Contents";

const defaultItems = [
  {
    key: 0,
    title: "여성패션",
    styles: "woman-clothes",
    keywords: ["반팔 티셔츠", "원피스", "청바지", "에코백", "샌들", "에코백"],
    visible: true,
  },
  {
    key: 1,
    title: "남성패션",
    styles: "man-clothes",
    keywords: ["반팔 티셔츠", "반바지", "리넨 팬츠", "슬리퍼", "카드지갑"],
    visible: true,
  },
  {
    key: 2,
    title: "뷰티",
    styles: "beauty",
    keywords: [],
    visible: true,
  },
  {
    key: 3,
    title: "출산/유아동",
    styles: "child",
    keywords: [],
    visible: true,
  },
  {
    key: 4,
    title: "식품",
    styles: "food",
    keywords: [],
    visible: true,
  },
  {
    key: 5,
    title: "주방용품",
    styles: "kitchen",
    keywords: [],
    visible: true,
  },
  {
    key: 6,
    title: "생활용품",
    styles: "living",
    keywords: [],
    visible: true,
  },
  {
    key: 7,
    title: "가구/홈인테리어",
    styles: "interior",
    keywords: [],
    visible: true,
  },
  {
    key: 8,
    title: "가전/디지털",
    styles: "digital",
    keywords: [],
    visible: true,
  },
  {
    key: 9,
    title: "스포츠/레저",
    styles: "sports",
    keywords: [],
    visible: true,
  },
  {
    key: 10,
    title: "자동차용품",
    styles: "car",
    keywords: [],
    visible: true,
  },
  {
    key: 11,
    title: "완구/취미",
    styles: "hobby",
    keywords: [],
    visible: true,
  },
  {
    key: 12,
    title: "문구/오피스",
    styles: "office",
    keywords: [],
    visible: true,
  },
  {
    key: 13,
    title: "도서/CD/DVD",
    styles: "book",
    keywords: [],
    visible: true,
  },
  {
    key: 14,
    title: "반려동물용품",
    styles: "pets",
    keywords: [],
    visible: true,
  },
  {
    key: 15,
    title: "여행",
    styles: "travel",
    keywords: [],
    visible: true,
  },
  {
    key: 16,
    title: "유아동패션",
    styles: "child-fashion",
    keywords: [],
    visible: true,
  },
  {
    key: 17,
    title: "헬스/건강식품",
    styles: "health",
    keywords: [],
    visible: true,
  },
];

const CategoryBestUnit = () => {
  return (
    <article className={styles["best-unit"]}>
      <span className={styles["title"]} />
      <SideMenu />
      {defaultItems.map((items) => (
        <Contents items={items} />
      ))}
    </article>
  );
};
export default CategoryBestUnit;
