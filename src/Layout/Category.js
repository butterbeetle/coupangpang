import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CategoryItems from "../Components/CategoryItems";
import styles from "./Category.module.css";

const categoryItems = [
  {
    icon: "fashion",
    title: "패션의류/잡화",
    submenu: [
      {
        title: "여성패션",
        submenu: [
          { title: "의류" },
          { title: "속옷/잠옷" },
          { title: "신발" },
          { title: "가방/잡화" },
        ],
      },
      {
        title: "남성패션",
        submenu: [
          { title: "의류" },
          { title: "속옷/잠옷" },
          { title: "신발" },
          { title: "가방/잡화" },
        ],
      },
      {
        title: "남녀 공용 의류",
        submenu: [
          { title: "티셔츠" },
          { title: "맨투맨/후드티" },
          { title: "셔츠" },
          { title: "바지" },
          { title: "트레이닝복" },
          { title: "후드집업/집업류" },
          { title: "니트류/조끼" },
          { title: "아우터" },
          { title: "테마의류" },
          { title: "커플룩/패밀리룩" },
          { title: "빅사이즈" },
        ],
      },
      {
        title: "유아동패션",
        submenu: [{ title: "베이비" }, { title: "여아" }, { title: "남아" }],
      },
    ],
  },
  {
    icon: "beauty",
    title: "뷰티",
    submenu: [
      {
        title: "명품뷰티",
      },
    ],
  },
  {
    icon: "child",
    title: "출산/유아동",
  },
  // {
  //   icon: "beauty",
  //   title: "뷰티",
  //   submenu: [
  //     {
  //       title: "명품뷰티",
  //       submenu: [],
  //     },
  //     {
  //       title: "스킨케어",
  //       submenu: [
  //         "스킨",
  //         "로션",
  //         "에센스/세럼/앰플",
  //         "미스트",
  //         "오일",
  //         "크림/올인원",
  //         "기초세트",
  //         "마스크/팩",
  //         "선케어/태닝",
  //       ],
  //     },
  //     { title: "클린/비건뷰티", submenu: ["스킨케어", "메잌업", "네일&툴"] },
  //     {
  //       title: "클렌징/필링",
  //       submenu: [
  //         "클렌징 폼",
  //         "클렌징 젤/파우더",
  //         "클렌징 비누",
  //         "클렌징 오일",
  //         "클렌징 워터",
  //         "립/아이리무버",
  //         "클렌징 티슈/시트",
  //         "클렌징 로션/크림",
  //         "클렌징세트",
  //         "스크럽/필링",
  //       ],
  //     },
  //     { title: "더마코스메틱", submenu: [] },
  //     {
  //       title: "메이크업",
  //       submenu: [
  //         "베이스 메이크업",
  //         "아이 메이크업",
  //         "립 메이크업",
  //         "치크메이크업",
  //         "멀티메이크업",
  //         "바이메이크업",
  //       ],
  //     },
  //     {
  //       title: "향수",
  //       submenu: [
  //         "여성향수",
  //         "남성향수",
  //         "남녀공용향수",
  //         "고체향수",
  //         "드레스퍼퓸",
  //       ],
  //     },
  //     {
  //       title: "남성화장품",
  //       submenu: [
  //         "남성스킨케어",
  //         "남성메이크업",
  //         "남성화장품세트",
  //         "남성 헤어케어",
  //         "남성 바디케어",
  //         "남성 쉐이빙 케어",
  //       ],
  //     },
  //     {
  //       title: "네일",
  //       submenu: [
  //         "네일팁/스티커",
  //         "일반네일",
  //         "젤네일",
  //         "큐티클/영양",
  //         "네일케어도구",
  //         "네일아트소품/도구",
  //         "네일세트",
  //       ],
  //     },
  //     {
  //       title: "뷰티소품",
  //       submenu: [
  //         "화장솜/면봉",
  //         "아이소품",
  //         "페이스소품",
  //         "클렌징소품",
  //         "헤어소품",
  //         "피부관리기",
  //         "용기/거울/기타소품",
  //       ],
  //     },
  //     {
  //       title: "어린이화장품",
  //       submenu: ["메이크업", "향수", "네일케어", "세트/키트"],
  //     },
  //     { title: "로드샵", submenu: [] },
  //     {
  //       title: "헤어",
  //       submenu: [
  //         "샴푸",
  //         "린스/컨디셔너",
  //         "트리트먼트/팩/앰플",
  //         "헤어에센스/오일",
  //         "헤어스타일링",
  //         "헤어세트",
  //         "염색/파마",
  //       ],
  //     },
  //     {
  //       title: "바디",
  //       submenu: [
  //         "샤워/입욕용품",
  //         "바디로션/크림",
  //         "핸드/풋/데오",
  //         "제모/슬리밍/청결제",
  //       ],
  //     },
  //     { title: "선물세트/키트", submenu: ["선물세트", "여행용키트"] },
  //   ],
  // },
];
const Category = () => {
  return (
    <div className={styles["category"]}>
      <p className={styles["category--p"]}>카테고리</p>
      <ul className={styles["menus"]}>
        {categoryItems.map((menu, idx) => {
          const depth = 0;
          return <CategoryItems items={menu} key={idx} depth={depth} />;
        })}
      </ul>
    </div>
  );
};

export default Category;
