import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const allCategoryItems = [
  {
    categoryId: 1,
    categoryIcon: "fashion",
    categoryName: "패션의류/잡화",
    categoryItems: [
      {
        name: "여성패션",
        items: ["의류", "속옷/잠옷", "신발", "가방/잡화"],
      },
      {
        name: "남성패션",
        items: ["의류", "속옷/잠옷", "신발", "가방/잡화"],
      },
      {
        name: "남녀 공용 의류",
        items: [
          "티셔츠",
          "맨투맨/후드티",
          "셔츠",
          "바지",
          "트레이닝복",
          "후드집업/집업류",
          "니트류/조끼",
          "아우터",
          "테마의류",
          "커플룩/패밀리룩",
          "빅사이즈",
        ],
      },
      {
        name: "유아동패션",
        items: ["베이비", "여아", "남아"],
      },
    ],
  },
  // {
  //   categoryId: 2,
  //   categoryIcon: "beauty",
  //   categoryName: "뷰티",
  //   categoryItems: [
  //     {
  //       name: "명품뷰티",
  //       items: [],
  //     },
  //     {
  //       name: "스킨케어",
  //       items: [
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
  //     { name: "클린/비건뷰티", items: ["스킨케어", "메잌업", "네일&툴"] },
  //     {
  //       name: "클렌징/필링",
  //       items: [
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
  //     { name: "더마코스메틱", items: [] },
  //     {
  //       name: "메이크업",
  //       items: [
  //         "베이스 메이크업",
  //         "아이 메이크업",
  //         "립 메이크업",
  //         "치크메이크업",
  //         "멀티메이크업",
  //         "바이메이크업",
  //       ],
  //     },
  //     {
  //       name: "향수",
  //       items: [
  //         "여성향수",
  //         "남성향수",
  //         "남녀공용향수",
  //         "고체향수",
  //         "드레스퍼퓸",
  //       ],
  //     },
  //     {
  //       name: "남성화장품",
  //       items: [
  //         "남성스킨케어",
  //         "남성메이크업",
  //         "남성화장품세트",
  //         "남성 헤어케어",
  //         "남성 바디케어",
  //         "남성 쉐이빙 케어",
  //       ],
  //     },
  //     {
  //       name: "네일",
  //       items: [
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
  //       name: "뷰티소품",
  //       items: [
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
  //       name: "어린이화장품",
  //       items: ["메이크업", "향수", "네일케어", "세트/키트"],
  //     },
  //     { name: "로드샵", items: [] },
  //     {
  //       name: "헤어",
  //       items: [
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
  //       name: "바디",
  //       items: [
  //         "샤워/입욕용품",
  //         "바디로션/크림",
  //         "핸드/풋/데오",
  //         "제모/슬리밍/청결제",
  //       ],
  //     },
  //     { name: "선물세트/키트", items: ["선물세트", "여행용키트"] },
  //   ],
  // },
];

// allCategoryItems.map((item) => console.log(item.categoryItems));
// allCategoryItems.map((item) =>
//   item.categoryItems.map((items) => console.log(items.name))
// );

const Category = () => {
  const [categoryHover, setCategoryHover] = useState(false);

  const categoryHoverHandler = () => {
    setCategoryHover((prevState) => !prevState);
  };

  return (
    <div
      className={styles.category}
      onMouseOver={categoryHoverHandler}
      onMouseOut={categoryHoverHandler}
    >
      <p className={styles["category--p"]}>카테고리</p>
      <div className={styles["category__list--first"]}>
        <ul className={styles["category__list--first--ul"]}>
          {allCategoryItems.map((category) => (
            <li>
              <i className={styles[`${category.categoryIcon}`]}></i>
              <Link to="/">{category.categoryName}</Link>
              <i className={styles["select"]}></i>
              <div className={styles["category__list--second"]}>
                <ul>
                  {category.categoryItems.map((item) => (
                    <li>
                      <Link to="/">{item.name}</Link>
                      <i className={styles["select--second"]}></i>
                      <div className={styles["category__list--third"]}>
                        <ul>
                          {item.items.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
