import React from "react";
import { NavLink } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Notify as PopperWrapper } from "./Notification";
import { User as UserWrapper } from "./User";

import imageUser from "../../../../../../userImage/user.jpg";

import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";

import { RiNotification2Line, RiMoreFill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { BsCheck2 } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import config from "../../../../../config";
import ContentNotify from "./Notification/ContentNotify";

const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigated")}>
        <Tippy content="Explore">
          <NavLink
            to={config.routes.explore}
            className={(nav) => cx("link", { active: nav.isActive })}
          >
            <FaHashtag className={cx("nav")} />
          </NavLink>
        </Tippy>

        <Tippy content="Messages">
          <NavLink className={cx("link")} to={config.routes.messages}>
            <TbMail className={cx("nav")} />
          </NavLink>
        </Tippy>

        <HeadlessTippy
          interactive
          placement="top-start"
          trigger="click"
          render={(attrs) => (
            <div className="Notify" tabIndex="-1" {...attrs}>
              <div className={cx("pseudo")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(255,255,255)"
                  viewBox="0 0 24 8"
                  width="24"
                  height="8"
                >
                  <path d="M0 8c7 0 10-8 12-8s5 8 12 8z"></path>
                </svg>
              </div>
              <PopperWrapper>
                <div className={cx("notify")}>
                  <div className={cx("notify__header")}>
                    <div className={cx("notify__header-top")}>
                      <h2 className={cx("notify__heading")}>Notifications</h2>
                      <HeadlessTippy
                        trigger="click"
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                          <div className="box" tabIndex="-1" {...attrs}>
                            <div className={cx("notify__more-actions")}>
                              <div className={cx("notify__more-list")}>
                                <div className={cx("notify__action-item")}>
                                  <BsCheck2
                                    className={cx("notify__item-icon")}
                                  />
                                  <p className={cx("notify__item-title")}>
                                    Mark all as read
                                  </p>
                                </div>
                                <div className={cx("notify__action-item")}>
                                  <IoMailOpenOutline
                                    className={cx("notify__item-icon")}
                                  />
                                  <p className={cx("notify__item-title")}>
                                    Open notifications
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      >
                        <div className={cx("notify__more")}>
                          <RiMoreFill className={cx("notify__icon")} />
                        </div>
                      </HeadlessTippy>
                    </div>

                    <div className={cx("notify__header-bottom")}>
                      <ContentNotify />
                    </div>
                  </div>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <Tippy content="Notifications">
            <div className={cx("link")}>
              <RiNotification2Line className={cx("nav")} />
            </div>
          </Tippy>
        </HeadlessTippy>
      </div>

      <HeadlessTippy
        interactive
        placement="top-start"
        trigger="click"
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <div className={cx("pseudo__user")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(255,255,255)"
                viewBox="0 0 24 8"
                width="24"
                height="8"
              >
                <path d="M0 8c7 0 10-8 12-8s5 8 12 8z"></path>
              </svg>
            </div>
            <UserWrapper />
          </div>
        )}
      >
        <div className={cx("user")}>
          <img src={imageUser} alt="" className={cx("user-avatar")} />
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Navigation;
