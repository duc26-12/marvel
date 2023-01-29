import styles from "./Defautlayout.module.scss";
import classNames from "classnames/bind";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
