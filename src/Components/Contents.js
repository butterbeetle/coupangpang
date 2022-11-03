import classes from "./Contents.module.css";

const Contents = () => {
  return (
    <section className={classes.main_contents_section}>
      <article className={classes.side_bar_box}>
        <div className={classes.side_bar}></div>
      </article>
      <article className={classes.main_contents_box}>
        <div>
          <div className={classes.title_box}>
            <h1>오늘의 발견</h1>
            <h4>|</h4>
            <h4>오늘 쿠팡이 엄선한 가장 HOT한 상품!</h4>
          </div>
          <div className={classes.today_items}>
            <div className={classes.today_items_grid}>
              <div className={classes.today_item1}>item1</div>
              <div className={classes.today_item2}>item2</div>
              <div className={classes.today_item3}>item3</div>
              <div className={classes.today_item4}>item4</div>
              <div className={classes.today_item5}>item5</div>
              <div className={classes.today_item6}>item6</div>
              <div className={classes.today_item7}>item7</div>
              <div className={classes.today_item8}>item8</div>
              <div className={classes.today_item9}>item9</div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contents;
