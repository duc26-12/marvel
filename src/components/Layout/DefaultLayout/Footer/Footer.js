import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { NavLink, Link } from "react-router-dom";
import config from "../../../config";
import { TfiFacebook, TfiTwitterAlt, TfiInstagram } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

import insiderLogo from "../../../../userImage/insiderlogo.png";
import unlimited from "../../../../userImage/unlimited.png";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("footer-top")}>
          <div className={cx("row", "no-gutters")}>
            <div className={cx("col", "l-5")}>
              <div className={cx("footer_links")}>
                <NavLink className={cx("logo")} to={config.routes.home}>
                  <svg
                    viewBox="0 0 36 52"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cx("svg_logo")}
                  >
                    <rect fill="#EC1D24" width="100%" height="100%"></rect>
                    <path
                      fill="#FEFEFE"
                      d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
                    ></path>
                  </svg>
                </NavLink>
                <ul className={cx("nav_list")}>
                  <li className={cx("nav_item")}>
                    <Link className={cx("nav_title")} to={config.routes.info}>
                      About Marvel
                    </Link>
                  </li>
                  <li className={cx("nav_item")}>
                    <Link
                      className={cx("nav_title")}
                      to={config.routes.feedback}
                    >
                      Help/FAQs
                    </Link>
                  </li>
                  <li className={cx("nav_item")}>
                    <a
                      className={cx("nav_title")}
                      target="_blank"
                      rel="noreferrer"
                      href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]"
                    >
                      Careers
                    </a>
                  </li>
                  <li className={cx("nav_item")}>
                    <Link
                      className={cx("nav_title")}
                      to={config.routes.internships}
                    >
                      Internships
                    </Link>
                  </li>
                </ul>
                <ul className={cx("nav_list", "check")}>
                  <li className={cx("nav_item")}>
                    <Link
                      className={cx("nav_title", "normalFont")}
                      to={config.routes.advertising}
                    >
                      advertising
                    </Link>
                  </li>
                  <li className={cx("nav_item")}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={cx("nav_title", "normalFont")}
                      href="https://www.preview.disneyplus.com/unavailable?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA"
                    >
                      Disney+
                    </a>
                  </li>
                  <li className={cx("nav_item")}>
                    <a
                      className={cx("nav_title", "normalFont")}
                      href="https://www.marvelhq.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Marvelhq.com
                    </a>
                  </li>
                  <li className={cx("nav_item")}>
                    <Link
                      className={cx("nav_title", "normalFont")}
                      to={config.routes.login}
                    >
                      Redeem Digital Comics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("col", "l-4")}>
              <div className={cx("footer_promo-links")}>
                <div className={cx("description")}>
                  <div className={cx("logo")}>
                    <img src={insiderLogo} alt="" className={cx("img")} />
                  </div>
                  <div className={cx("info")}>
                    <a
                      className={cx("info_title")}
                      href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer"
                    >
                      marvel insider
                    </a>
                    <p className={cx("info_text")}>
                      Get Rewarded for Being a Marvel Fan
                    </p>
                  </div>
                </div>
                <div className={cx("description")}>
                  <div className={cx("logo")}>
                    <img src={unlimited} alt="" className={cx("img")} />
                  </div>
                  <div className={cx("info")}>
                    <a
                      className={cx("info_title")}
                      href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer"
                    >
                      Marvel Unlimited
                    </a>
                    <p className={cx("info_text")}>
                      Access Over 30,000+ Digital Comics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-3")}>
              <div className={cx("footer_follow")}>
                <div className={cx("follow")}>
                  <h3 className={cx("follow_header")}> follow marvel</h3>
                  <ul className={cx("follow_lists")}>
                    <li className={cx("follow_item", "facebook")}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/duc2612"
                        className={cx("follow_link")}
                      >
                        <TfiFacebook className={cx("follow_icon")} />
                      </a>
                    </li>
                    <li className={cx("follow_item", "instagram")}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/_duc26.12/"
                        className={cx("follow_link")}
                      >
                        <TfiInstagram className={cx("follow_icon")} />
                      </a>
                    </li>
                    <li className={cx("follow_item", "twitter")}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/_duc2612"
                        className={cx("follow_link")}
                      >
                        <TfiTwitterAlt className={cx("follow_icon")} />
                      </a>
                    </li>
                    <li className={cx("follow_item", "github")}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/duc26-12"
                        className={cx("follow_link")}
                      >
                        <BsGithub className={cx("follow_icon")} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer-bottom")}>
          <div className={cx("row", "sm-gutter")}>
            <div className={cx("col", "l-6")}>
              <div className={cx("author")}>
                <span>
                  <MdLocationPin className={cx("author_icon")} />
                  VietNam
                </span>
                © Copyright 2022 Phạm Văn Đức
              </div>
            </div>
            <div className={cx("col", "l-6")}>
              <span className={cx("legal_text")}>
                Email: pvd261202@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
