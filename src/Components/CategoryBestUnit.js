import { useRef } from "react";
import styles from "./CategoryBestUnit.module.css";

import SideMenu from "./CategoryBestUnit/SideMenu";
import Contents from "./CategoryBestUnit/Contents";

// const bestUnitItems = [
//   {
//     title:"woman-clothes",
//     keyword:[],
//     items:[
//       {
//         url:"/",
//         title:best_title1,
//         thumnail:best_thumnail1,
//         caption:{
//           title:"겨울 패션 할인 ~80%",
//           description:"1월 패션위크"
//         }
//       }
//     ],

//   }
// ]

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

const CategoryBestUnit = () => {
  const mainOffset = useRef(null);

  return (
    <article className={styles["best-unit"]} ref={mainOffset}>
      <span className={styles["title"]} />
      <SideMenu />
      <Contents />
      <Contents />
    </article>
  );
};
export default CategoryBestUnit;
