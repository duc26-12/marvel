import React from "react";
import styles from "./Sale.module.scss";
import classNames from "classnames/bind";
import imageSale from "../../../../userImage/sale.jpg";
import Eyebrow from "../../../Eyebrow/Eyebrow";
import Button from "../../../Button/Button";
import config from "../../../config";

const cx = classNames.bind(styles);

const Sale = () => {
  return (
    <div>
      <div className={cx("grid")}>
        <div className={cx("row", "sm-gutter")}>
          <div className={cx("col", "l-5")}>
            <div className={cx("Sale_introduce")}>
              <Eyebrow title="On Sale" small white />
              <div className={cx("Sale_header")}>new comics this week</div>
              <p className={cx("Sale_title")}>
                Check out the newest Marvel comics coming out this week!
              </p>
              <div className={cx("Sale_button")}>
                <Button big to={config.routes.store}>
                  <span className={cx("Sale_button-title")}>
                    shop digital comics
                  </span>
                </Button>
                <Button big to={config.routes.subscriptions}>
                  <span className={cx("Sale_button-title")}>
                    print subscription
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className={cx("col", "l-7")}>
            <div className={cx("Sale_background")}>
              <img src={imageSale} alt="" className={cx("img")} />
            </div>
          </div>
        </div>
        <img src={imageSale} alt="" className={cx("img_child")} />
      </div>
    </div>
  );
};

export default Sale;
