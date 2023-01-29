import React from "react";
import styles from "./Notify.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Notify = ({ children }) => {
  return <div className={cx("wrapper")}>{children}</div>;
};

export default Notify;
