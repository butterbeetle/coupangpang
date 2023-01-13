import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryBestUnit.module.css";

import CategoryPromotion from "./CategoryBestUnit/CategoryPromotion";
import CategoryItemList from "./CategoryBestUnit/CategoryItemList";

import best_title1 from "../img/best_title/best_title_womanclothe2.png";
import SideMenu from "./CategoryBestUnit/SideMenu";

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

const CategoryBestUnit = () => {
  const test = useRef(null);
  const test2 = useRef(null);
  const scrollSection = () => {
    window.scrollTo({
      top: test2.current.offsetTop + test.current.offsetTop + 600,
      behavior: "auto",
    });
    console.log(test2.current.offsetTop, test.current.offsetTop);
  };
  return (
    <article className={styles["best-unit"]} ref={test2}>
      <button onClick={scrollSection}>test</button>
      {/* <SideMenu /> */}
      <span className={styles["title"]} />
      <div className={styles["contents"]}>
        <div className={styles["main"]}>
          <div className={styles["category"]}>
            <img src={best_title1} alt="Title" />
            <Link to="/">
              <span className={styles["shortcut"]}>{"바로가기 >"}</span>
            </Link>
          </div>
          <div className={styles["keyword"]}>
            <h4>HOT키워드</h4>
            <ul>
              <li>#반팔 티셔츠</li>
              <li>#원피스</li>
              <li>#청바지</li>
              <li>#에코백</li>
              <li>#샌들</li>
              <li>#에코백</li>
            </ul>
          </div>
          <CategoryPromotion />
          <CategoryItemList />
        </div>
      </div>
      <div className={styles["contents"]} ref={test}>
        <div className={styles["main"]}>
          <div className={styles["category"]}>
            <img src={best_title1} alt="Title" />
            <Link to="/">
              <span className={styles["shortcut"]}>{"바로가기 >"}</span>
            </Link>
          </div>
          <div className={styles["keyword"]}>
            <h4>HOT키워드</h4>
            <ul>
              <li>#반팔 티셔츠</li>
              <li>#원피스</li>
              <li>#청바지</li>
              <li>#에코백</li>
              <li>#샌들</li>
              <li>#에코백</li>
            </ul>
          </div>
          <CategoryPromotion />
          <CategoryItemList />
        </div>
      </div>
      <div className={styles["contents"]}>
        <div className={styles["main"]}>
          <div className={styles["category"]}>
            <img src={best_title1} alt="Title" />
            <Link to="/">
              <span className={styles["shortcut"]}>{"바로가기 >"}</span>
            </Link>
          </div>
          <div className={styles["keyword"]}>
            <h4>HOT키워드</h4>
            <ul>
              <li>#반팔 티셔츠</li>
              <li>#원피스</li>
              <li>#청바지</li>
              <li>#에코백</li>
              <li>#샌들</li>
              <li>#에코백</li>
            </ul>
          </div>
          <CategoryPromotion />
          <CategoryItemList />
        </div>
      </div>
    </article>
  );
};
export default CategoryBestUnit;
