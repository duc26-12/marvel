import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Menu = ({ children }) => {
  return <nav className={cx("Menu")}>{children}</nav>;
};

export default Menu;
