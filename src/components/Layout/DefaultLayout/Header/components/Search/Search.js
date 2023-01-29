import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

import { Wrapper as PopperWrapper } from "./Popper";

import { figureData, filmData } from "./searchData";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef();

  return (
    <div className={cx("wrapper")}>
      <Tippy
        interactive
        trigger="focus"
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="10" {...attrs}>
            <PopperWrapper>
              <div className={cx("figure")}>
                {figureData.map((item, i) => {
                  return (
                    <p key={i} className={cx("figure-item")}>
                      <IoSearchOutline className={cx("figure-icon")} />
                      {item.title}
                    </p>
                  );
                })}
              </div>

              <div className={cx("movies")}>
                <h2 className={cx("movies-heading")}> Suggested Movies</h2>
                {filmData.map((item) => {
                  return (
                    <div className={cx("movies-item")} key={item.id}>
                      <img
                        src={item.image}
                        alt="something"
                        className={cx("movies-image")}
                      />
                      <div className={cx("movies-info")}>
                        <p className={cx("movies-title")}>{item.title}</p>
                        <div className={cx("movies-since")}>{item.since}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <input
          value={searchValue}
          type="text"
          ref={inputRef}
          placeholder="Search..."
          spellCheck={false}
          className={cx("input_search")}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </Tippy>
      {!!searchValue && (
        <button
          className={cx("clear")}
          onClick={() => {
            setSearchValue("");
            inputRef.current.focus();
          }}
        >
          <AiFillCloseCircle />
        </button>
      )}
      <AiOutlineLoading3Quarters className={cx("loading")} />

      <button className={cx("find")}>
        <IoSearchOutline className={cx("find-icon")} />
      </button>
    </div>
  );
};

export default Search;
