import React from "react";
import { Link } from "react-router-dom";
import config from "../../config/index";
import BgInfo from "../../../userImage/BgInfo.jpg";
import Eyebrow from "../../Eyebrow/Eyebrow";

import styles from "./Info.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Info = () => {
  const slideStyles = {
    width: "100%",
    height: "400px",
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${BgInfo})`,
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("info_background")} style={slideStyles}>
        <div className={cx("info_container")}>
          <h1 className={cx("info_heading")}>MARVEL CORPORATE INFORMATION</h1>
        </div>
      </div>

      <div className={cx("info_content")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("content_container")}>
            <Eyebrow normal title="COMPANY INFO AND CONTACT"></Eyebrow>
            <div className={cx("descriptions")}>
              <p>
                Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt
                Disney Company, is one of the world's most prominent
                character-based entertainment companies, built on a proven
                library of more than 8,000 characters featured in a variety of
                media over seventy-five years. Marvel utilizes its character
                franchises in entertainment, licensing and publishing. For more
                information visit marvel.com. © 2020 MARVEL
              </p>
              <div className={cx("info")}>
                <h4>Corporate Headquarters</h4>
                <div>
                  <p>
                    <strong>Marvel Entertainment, LLC</strong>
                    <br />
                    1290 Avenue of the Americas
                    <br />
                    New York, NY 10104
                  </p>
                </div>
                <div>
                  <h4>Business Inquiries</h4>
                  <p>
                    For tech support, please visit the
                    <Link to={config.routes.feedback}>Feedback Page</Link>
                    .
                    <br />
                    General phone number, Marvel Entertainment, LLC:
                    212-576-4000
                  </p>
                </div>
                <div>
                  <h4>Consumer Inquiries</h4>
                  For FAQ's related to Marvel Comics and Marvel.com: Visit the
                  <Link to={config.routes.feedback}>Feedback Page</Link>.
                  <p>
                    <strong>
                      Marvel.com, Marvel Comics app, and Marvel Digital Comics
                      Unlimited Subscriptions:
                    </strong>
                    <br />
                    For any inquiries unresolved by the Help Page, please use
                    the Contact Form
                    <Link to={config.routes.contacts}>here</Link>
                    .
                    <br />
                    <br />
                    <strong>For Print Subscriptions:</strong>
                    <br />
                    Marvel Subscriptions
                    <br />
                    PO Box 727
                    <br />
                    New Hyde Park, NY 11040
                    <br />
                    TOLL FREE: 888-511-5480 -
                    <a href="mailto:marvelsubs@midtowncomics.com">
                      marvelsubs@midtowncomics.com{" "}
                    </a>
                    <br />
                    <br />
                    <strong>See also: </strong>
                    <a href="http://subscriptions.marvel.com/faq.asp">
                      marvelsubs@midtowncomics.com{" "}
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Media Relations</h4>
                  <p>
                    Dan Klores Communications
                    <br />
                    Jeff Klein
                    <br />
                    Executive Vice President
                    <br />
                    (212) 981-5189
                    <a href="mailto:jeff_klein@dkcnews.com">
                      jeff_klein@dkcnews.com{" "}
                    </a>
                  </p>
                </div>
                <br />
                <h3>Marvel Terms and Policies</h3>
                <ul className={cx("contact_text")}>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://privacy.thewaltdisneycompany.com/en/"
                    >
                      Marvel.com Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://disneytermsofuse.com/"
                      rel="noreferrer"
                    >
                      Marvel.com Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.marvel.com/corporate/marvel_unlimited_subscriber_agreement"
                    >
                      Marvel Unlimited Subscriber Agreement
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.marvel.com/corporate/insider_terms"
                    >
                      Marvel Insider Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
