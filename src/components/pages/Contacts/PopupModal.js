import React, { useState } from "react";
import styles from "./Popup.module.scss";
import classNames from "classnames/bind";

import { BsCheck2Circle } from "react-icons/bs";

const cx = classNames.bind(styles);
const PopupModal = (props) => {
  const handleToggle = (e) => {
    e.preventDefault();
    props.toggle(false);

    window.location.reload(true);
  };

  return props.Trigger ? (
    <div className={cx("wrapper")}>
      <div className={cx("modal")}>
        <div className={cx("plane")}>
          <BsCheck2Circle />
        </div>
        <div className={cx("bottom")}>
          <div className={cx("cloud")}></div>
          <div className={cx("cloud2")}></div>
          <div className={cx("cloud3")}></div>
        </div>
        <div className={cx("title")}>
          <h1>Success!</h1>
          <p>Thanks for your feedback</p>
          <button className={cx("close")} onClick={handleToggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupModal;
