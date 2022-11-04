import classes from "./Contents.module.css";

const Contents = () => {
  return (
    <section className={classes.main_contents_section}>
      <article className={classes.side_bar_box}>
        <div className={classes.side_bar}></div>
      </article>
      <article className={classes.today_discovery_box}>
        <div>
          <div className={classes.title_box}>
            <h1>오늘의 발견</h1>
            <h4>|</h4>
            <h4>오늘 쿠팡이 엄선한 가장 HOT한 상품!</h4>
          </div>
          <div className={classes.today_items}>
            <div className={classes.today_items_grid}>
              <div className={[classes.item, classes.today_item1].join(" ")}>
                item1
              </div>
              <div className={[classes.item, classes.today_item2].join(" ")}>
                item2
              </div>
              <div className={[classes.item, classes.today_item3].join(" ")}>
                item3
              </div>
              <div className={[classes.item, classes.today_item4].join(" ")}>
                item4
              </div>
              <div className={[classes.item, classes.today_item5].join(" ")}>
                item5
              </div>
              <div className={[classes.item, classes.today_item6].join(" ")}>
                item6
              </div>
              <div className={[classes.item, classes.today_item7].join(" ")}>
                item7
              </div>
              <div className={[classes.item, classes.today_item8].join(" ")}>
                item8
              </div>
              <div className={[classes.item, classes.today_item9].join(" ")}>
                item9
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className={classes.today_recommend_box}></article>
      <article className={classes.category_recommend_box}></article>
    </section>
  );
};

export default Contents;
