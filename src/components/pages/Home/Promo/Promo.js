import React from "react";
import styles from "./Promo.module.scss";
import classNames from "classnames/bind";
import imageInsider from "../../../../userImage/insider.jpg";
import Button from "../../../Button/Button";

const cx = classNames.bind(styles);

const Promo = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("row", "sm-gutter", "promo_body")}>
          <div className={cx("col", "l-6")}>
            <img src={imageInsider} alt="" className={cx("img")} />
          </div>
          <div className={cx("col", "l-6")}>
            <div className={cx("promo_container")}>
              <span className={cx("name")}>marvel insider</span>
              <h3 className={cx("title")}>Watch, Earn, Redeem!​</h3>
              <p className={cx("description")}>
                Get rewarded for doing what you already do as a fan.​
              </p>
              <Button>
                <span className={cx("button_title")}>JOIN NOW</span>
              </Button>

              <p className={cx("legal")}>Terms and Conditions Apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
