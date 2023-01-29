import { useEffect, useState } from "react";
import styles from "./Masthead.module.scss";
import classNames from "classnames/bind";

import Button from "../../../Button/Button";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const cx = classNames.bind(styles);

const SlideShow = ({ slide }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slide[currentImage].url})`,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImage === 4) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const goToNext = (currentImage) => {
    setCurrentImage(currentImage);
  };

  const Prev = () => {
    const isItems = currentImage === 0;
    const pre = isItems ? slide.length - 1 : currentImage - 1;
    setCurrentImage(pre);
  };

  const Next = () => {
    const isItems = currentImage === slide.length - 1;
    const next = isItems ? 0 : currentImage + 1;

    setCurrentImage(next);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("leftArrow")} onClick={Prev}>
        <VscChevronLeft />
      </div>
      <div className={cx("rightArrow")} onClick={Next}>
        <VscChevronRight />
      </div>
      <div className={cx("slide")} style={slideStyles}></div>
      <div className={cx("descriptions")}>
        <div className={cx("info")}>
          <img src={slide[currentImage].logo} alt="" className={cx("logo")} />
          <div className={cx("button")}>
            <Button href={slide[currentImage].movies} target>
              Movie
            </Button>
            <Button to="/">See more</Button>
          </div>
        </div>
      </div>
      <div className={cx("carousel")}>
        {slide.map((slide, currentImage1) => (
          <span
            key={currentImage1}
            className={
              currentImage === currentImage1 ? cx("item", "active") : cx("item")
            }
            onClick={() => goToNext(currentImage1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
