import React from "react";

import BgExplore from "../../../image/image_explore/background.jpg";
import Eyebrow from "../../Eyebrow/Eyebrow";

import styles from "./Explore.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Explore = () => {
  const slideStyles = {
    width: "100%",
    height: "400px",
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${BgExplore})`,
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("explore_background")} style={slideStyles}>
        <div className={cx("explore_container")}>
          <h1 className={cx("explore_heading")}>EXPLORE THE UNIVERSE</h1>
        </div>
      </div>

      <div className={cx("grid", "wide")}>
        <div className={cx("explore_content")}>
          <Eyebrow title="COMIC EVENTS" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
