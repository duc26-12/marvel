import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ to, href, children, onClick, target, white, big }) => {
  let Comp = "button";

  const props = {
    onClick,
    target,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    props.target = "_blank";
    Comp = "a";
  }

  const classes = cx("wrapper", {
    white,
    big,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
