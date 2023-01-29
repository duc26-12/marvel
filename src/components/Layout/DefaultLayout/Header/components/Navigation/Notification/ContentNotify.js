import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Notify.module.scss";
import { BsChatSquareText, BsChatSquare } from "react-icons/bs";

import imageUser from "../../../../../../../userImage/user.jpg";

const cx = classNames.bind(styles);

const ContentNotify = () => {
  const [tabActive, setTabActive] = useState(1);

  const handleActiveTab = (index) => {
    setTabActive(index);
  };

  const date = new Date();
  const hours = date.getHours();
  const results = hours - 0;

  return (
    <div className="wrapper">
      <div className={cx("block_tabs")}>
        <div
          className={tabActive === 1 ? cx("tabs", "active_tabs") : cx("tabs")}
          onClick={() => handleActiveTab(1)}
        >
          All activity
        </div>
        <div
          className={tabActive === 2 ? cx("tabs", "active_tabs") : cx("tabs")}
          onClick={() => handleActiveTab(2)}
        >
          Unread
        </div>
        <div
          className={tabActive === 3 ? cx("tabs", "active_tabs") : cx("tabs")}
          onClick={() => handleActiveTab(3)}
        >
          Mentions
        </div>
      </div>

      <div className={cx("block_content")}>
        <h4 className={cx("content__header")}>Before</h4>

        {/* All activity */}
        <div
          className={
            tabActive === 1 ? cx("content", "active_content") : cx("content")
          }
        >
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
        </div>

        {/* unread */}
        <div
          className={
            tabActive === 2 ? cx("content", "active_content") : cx("content")
          }
        >
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP")}>
                <BsChatSquareText className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                shared a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
            <div className={cx("act__unread")}>
              <div></div>
              <div className={cx("act__unchecked")}></div>
            </div>
          </div>
        </div>

        {/* mentions */}
        <div
          className={
            tabActive === 3 ? cx("content", "active_content") : cx("content")
          }
        >
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
          <div className={cx("act")}>
            <div className={cx("act__avatar")}>
              <img className={cx("act__img")} src={imageUser} alt="" />
              <div className={cx("act__iconP", "mentions")}>
                <BsChatSquare className={cx("act__iconC")} />
              </div>
            </div>
            <div className={cx("act__title")}>
              <div>
                <strong className={cx("act__strong")}>Pham Van Duc</strong>
                mentioned you in a post by <strong>Marvel</strong>.
              </div>
              <span className={cx("act__hour")}>{results} hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNotify;
