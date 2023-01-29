import React, { useState } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import Masthead from "./Masthead/Masthead";
import SlideChild from "./SlideChild/Slide";
import { FeedData, RailsData } from "../../../FeedData";
import MastheadSlide from "../../../MastheadSlide";
import ChildSlide from "../../../ChildSlide";
import Promo from "./Promo/Promo";
import Sale from "./Sale/Sale";
import Eyebrow from "../../Eyebrow/Eyebrow";
import Button from "../../Button/Button";

const cx = classNames.bind(styles);

const Home = () => {
  const [loadMore, setLoadMore] = useState(5);
  const showMore = FeedData.slice(0, loadMore);

  const handleMore = () => {
    setLoadMore(loadMore + loadMore);
  };

  const handleCompact = () => {
    if (loadMore > 5) {
      setLoadMore(loadMore - 5);
    }
  };

  const date = new Date();
  const getDate = date.getDate() - 4;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("masthead")}>
        <Masthead slide={MastheadSlide} />
      </div>

      <div className={cx("grid", "wide")}>
        <div className={cx("slide")}>
          <Eyebrow title="AVAILABLE NOW" normal />
          <SlideChild slide={ChildSlide} />
        </div>
      </div>

      <div className={cx("advertisement")}>
        <a
          className={cx("adv_link")}
          href="https://heelys.com/collections/marvel?utm_source=marvel&utm_medium=hpto&utm_campaign=avengers"
        >
          <img
            className={cx("img_adv")}
            src="https://tpc.googlesyndication.com/simgad/5004428100804825404"
            alt=""
          />
        </a>
        <span className={cx("adv_title")}>advertisement</span>
      </div>

      <div className={cx("grid", "wide")}>
        <div className={cx("row", "sm-gutter")}>
          <div className={cx("col ", "l-12", "eyes")}>
            <Eyebrow title="THE LATEST" big />
          </div>
          <div className={cx("feed", "col", "l-8")}>
            {showMore.map((item) => {
              return (
                <div className={cx("col", "l-12")} key={item.id}>
                  <div className={cx("feed_item")}>
                    <div className={cx("feed_img")}>
                      <img className={cx("img")} src={item.image} alt="" />
                    </div>
                    <div className={cx("feed_body")}>
                      <div className={cx("feed_type")}>{item.type}</div>
                      <div className={cx("feed_title")}>{item.title}</div>
                      <div className={cx("feed_countTime")}>
                        {getDate} days ago
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={cx("more")}>
              {loadMore === 5 ? (
                <Button white onClick={handleMore}>
                  <span className={cx("more_title")}>Load More</span>
                </Button>
              ) : (
                <Button white onClick={handleCompact}>
                  <span className={cx("more_title")}>Compact</span>
                </Button>
              )}
            </div>
          </div>
          <div className={cx("col", "l-4")}>
            <div className={cx("rails")}>
              <div className={cx("icon-svg")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="186"
                  height="55"
                  viewBox="0 0 186 55"
                >
                  <path
                    d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z"
                    mask="url(#mask-2)"
                  ></path>
                </svg>
              </div>
              <div className={cx("rails__description")}>
                <div className={cx("rails__header")}>
                  <div className={cx("rails__heading")}>the hype box</div>
                  <p className={cx("rails__title")}>
                    Can’t-miss news and updates from across the Marvel Universe!
                  </p>
                </div>
                <div className={cx("rails__body")}>
                  {RailsData.map((item) => {
                    return (
                      <div className={cx("col", "l-12")} key={item.id}>
                        <div className={cx("rails_item")}>
                          <div className={cx("rails_img")}>
                            <img
                              className={cx("child_img")}
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className={cx("chid_rails-body")}>
                            <div className={cx("rails_type")}>{item.type}</div>
                            <div className={cx("rails_title")}>
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={cx("icon-svg", "icon--border")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="186"
                  height="55"
                  viewBox="0 0 186 55"
                  className={cx("icon__box-bottom")}
                >
                  <path
                    d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z"
                    mask="url(#mask-2)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("advertisement")}>
        <a
          className={cx("adv_link")}
          href="https://lp.doordash.com/?utm_source=marvel&utm_medium=digital_display&utm_content=dx_marvel"
        >
          <img
            className={cx("img_adv")}
            src="https://tpc.googlesyndication.com/simgad/7828401540809853179"
            alt=""
          />
        </a>
        <span className={cx("adv_title")}>advertisement</span>
      </div>

      <div className={cx("Sale")}>
        <Sale />
      </div>
      <div className={cx("Slide_wrapper")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("slide_child")}>
            <SlideChild slide={ChildSlide} />
          </div>
        </div>
      </div>

      <div className={cx("promo")}>
        <Promo />
      </div>
    </div>
  );
};

export default Home;
