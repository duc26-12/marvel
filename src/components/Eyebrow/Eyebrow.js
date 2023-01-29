import React from "react";
import styles from "./Eyebrow.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Eyebrow = ({
  title,
  small = false,
  normal = false,
  big = false,
  white,
  black,
}) => {
  const classes = cx("wrapper", {
    small,
    normal,
    big,
    white,
    black,
  });

  return (
    <div className={classes}>
      <span className={cx("heading")}>{title}</span>
    </div>
  );
};

export default Eyebrow;
