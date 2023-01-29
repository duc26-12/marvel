import React from "react";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { Link } from "react-router-dom";

import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const cx = classNames.bind(styles);

const MENU_USER = [
  {
    id: 1,
    icon: <AiOutlineUser />,
    title: "View Profile",
    to: "/profile",
  },
  {
    id: 2,
    icon: <AiOutlineSetting />,
    title: "Settings",
    to: "/settings",
  },
  {
    id: 3,
    icon: <AiOutlineQuestionCircle />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    id: 4,
    icon: <FiLogOut />,
    title: "Log out",
    separate: true,
  },
];

const User = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user_menu")}>
        {MENU_USER.map((user) => {
          return (
            <Link className={cx("user__items")} to={user.to} key={user.id}>
              <div className={cx("user__icons")}>{user.icon}</div>
              <div className={cx("user__title")}>{user.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default User;
