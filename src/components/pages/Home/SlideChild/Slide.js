import React from "react";
import styles from "./Slide.module.scss";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const cx = classNames.bind(styles);

const Slide = ({ slide }) => {
  return (
    <div className={cx("wrapper")}>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        slidesPerView={6}
        spaceBetween={10}
        className={cx("slide")}
      >
        {slide.map((item) => {
          return (
            <SwiperSlide key={item.id} className={cx("item")}>
              <div>
                <img src={item.image} alt="" className={cx("img")} />
              </div>
              <div>
                <p className={cx("title")}>{item.title}</p>
                <p className={cx("since")}>{item.since}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slide;
